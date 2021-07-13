import mainBrandLogo from './assets/images/YSDS.svg';
import lifeScienceBrandLogo from './assets/images/YSDS_lf.svg';
import artBrandLogo from './assets/images/YSDS_art.svg';
import specialBrandLogo from './assets/images/YSDS_sp.svg';

export enum YsdsBrand {
    Main = 'brandMain',
    LifeScience = 'brandLifeScience',
    Art = 'brandArt',
    Special = 'brandSpecialLogistics',
}

export const YsdsBrandLogo: { [K in YsdsBrand]: string } = {
    [YsdsBrand.Main]: mainBrandLogo,
    [YsdsBrand.LifeScience]: lifeScienceBrandLogo,
    [YsdsBrand.Art]: artBrandLogo,
    [YsdsBrand.Special]: specialBrandLogo,
}