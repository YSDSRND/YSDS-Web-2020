import { YsdsBrand } from "../types";
import { AppState } from "../Store";

export function classNames(classMap: Record<string, boolean>): string {
    return Object.keys(classMap)
        .filter(key => classMap[key])
        .join(' ')
}

export function getYsdsBrand(brand: string): YsdsBrand {
    if (Object.values(YsdsBrand).some(v => v === brand)) {
        return brand as YsdsBrand;
    }

    return YsdsBrand.Main;
}

/**
 * Get the brand for the current page
 *
 * We need this method because when the site was migrated, the old brands were locked
 * in place, meaning that some pages need overriding to use the new brand system.
 *
 * @param currentPage - The current page
 * @returns The brand for the current page
 */
export const usePageBrand = (currentPage: AppState['currentPage']): YsdsBrand => {
    const oldBrandAcf = currentPage.currentPage?.acf.ysds_brand;
    const newBrandAcf = currentPage.currentPage?.acf.brand_class;

    if (!oldBrandAcf && !newBrandAcf) {
        return YsdsBrand.Main;
    }
    

    // To keep functionality of old pages we early return if the new brand is not set
    if (typeof newBrandAcf === "undefined" || newBrandAcf === null || newBrandAcf === "") {
        return oldBrandAcf;
    }

    const newBrandIsPriority = newBrandAcf !== "brandMain" && oldBrandAcf !== "brandMain";

    const pageBrand = newBrandIsPriority ? newBrandAcf : oldBrandAcf;

    return getYsdsBrand(pageBrand);
};
