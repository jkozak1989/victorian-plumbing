export interface ProductsResult {
    pagination: Pagination;
    facets:     Facet[];
    products:   Product[];
}

export interface Facet {
    identifier:  string;
    displayName: string;
    priority:    number;
    options:     Option[];
    facetType:   number;
}

export interface Option {
    identifier:   string;
    value:        boolean | ValueClass | string;
    displayValue: string;
    productCount: number;
    priority:     number;
}

export interface ValueClass {
    gte:  number;
    lte?: number;
}

export interface Pagination {
    from:     number;
    size:     number;
    total:    number;
    sortType: number;
}

export interface Product {
    id:               string;
    legacyId?:        string;
    legacyVariantId?: string;
    cultureCode:      CultureCode;
    isDefaultVariant: boolean;
    sku:              string;
    productName:      string;
    slug:             string;
    averageRating?:   number;
    reviewsCount:     number;
    questionsCount:   number;
    image:            Image;
    stockStatus:      StockStatus;
    price:            Price;
    attributes:       { [key: string]: boolean };
    defaultCategory:  DefaultCategory;
    brand:            Brand;
    score:            number;
}

export interface Brand {
    externalId:  string;
    slug:        string;
    name:        string;
    brandImage?: Image;
    depth?:      number;
}

export interface Image {
    externalId: string;
    url:        string;
    priority:   number;
    isDefault:  boolean;
    attributes: Attributes;
}

export interface Attributes {
    imageAltText: string;
}

export enum CultureCode {
    EnGB = "en-GB",
}

export interface DefaultCategory {
    externalId: string;
    slug:       string;
    name:       string;
    isDefault:  boolean;
    ancestors:  Brand[];
}

export interface Price {
    currencyCode:            CurrencyCode;
    wasPriceIncTax?:         number;
    wasPriceExcTax?:         number;
    priceIncTax:             number;
    priceExcTax:             number;
    isOnPromotion:           boolean;
    monthlyFinanceEstimate?: number;
    discountPercentage?:     number;
}

export enum CurrencyCode {
    Gbp = "GBP",
}

export interface StockStatus {
    status: Status;
}

export enum Status {
    G = "G",
}
