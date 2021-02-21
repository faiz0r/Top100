export interface Model {
    "im:name":        IMItemCount;
    "im:image":       IMImage[];
    "im:itemCount":   IMItemCount;
    "im:price":       IMPrice;
    "im:contentType": WelcomeIMContentType;
    rights:           IMItemCount;
    title:            IMItemCount;
    link:             Link;
    id:               ID;
    "im:artist":      IMArtist;
    category:         Category;
    "im:releaseDate": IMReleaseDate;
}

export interface Category {
    attributes: CategoryAttributes;
}

export interface CategoryAttributes {
    "im:id": string;
    term:    string;
    scheme:  string;
    label:   string;
}

export interface ID {
    label:      string;
    attributes: IDAttributes;
}

export interface IDAttributes {
    "im:id": string;
}

export interface IMArtist {
    label:      string;
    attributes: IMArtistAttributes;
}

export interface IMArtistAttributes {
    href: string;
}

export interface WelcomeIMContentType {
    "im:contentType": IMContentTypeIMContentType;
    attributes:       IMContentTypeAttributes;
}

export interface IMContentTypeAttributes {
    term:  string;
    label: string;
}

export interface IMContentTypeIMContentType {
    attributes: IMContentTypeAttributes;
}

export interface IMImage {
    label:      string;
    attributes: IMImageAttributes;
}

export interface IMImageAttributes {
    height: string;
}

export interface IMItemCount {
    label: string;
}

export interface IMPrice {
    label:      string;
    attributes: IMPriceAttributes;
}

export interface IMPriceAttributes {
    amount:   string;
    currency: string;
}

export interface IMReleaseDate {
    label:      Date;
    attributes: IMItemCount;
}

export interface Link {
    attributes: LinkAttributes;
}

export interface LinkAttributes {
    rel:  string;
    type: string;
    href: string;
}
