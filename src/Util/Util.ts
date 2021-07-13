import { YsdsBrand } from "../types";

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