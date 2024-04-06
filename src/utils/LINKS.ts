/**
 * Users can copy and paste the entire contents of this file and customize the links to suit their website needs.
 */



/**
 * The `SitePageLink` type defines properties for a link on a website, including its id, title,
 * description, path, external flag, external link, and internal link.
 * @property {string} id - The `id` property is a unique identifier for each link in the `SitePageLink`
 * type. It is of type `string` and is read-only, meaning it cannot be modified once assigned a value.
 * @property {string} title - The `title` property is a string that stores the title of the link. It is
 * read-only, meaning it cannot be modified once it is assigned a value.
 * @property {string} description - The `description` property is a string that stores the description
 * of the link. It provides additional information about the link's content or purpose.
 * @property {string} path - The `path` property is a string that represents the path of the link. It
 * is used to determine the URL or route that the link should navigate to.
 * @property {boolean} external - The `external` property is a boolean value that indicates whether the
 * link is an external link or an internal link. If the value is `true`, it means the link is an
 * external link. If the value is `false`, it means the link is an internal link.
 * @property {string | "none" | "_external"} externalLink - The `externalLink` property in the
 * `SitePageLink` type is used to store the external link of the link. It can have one of the following
 * values:
 * @property {string | "none" | "_internal"} internalLink - The `internalLink` property in the
 * `SitePageLink` type is used to store the internal link of the link. It can have one of the following
 * values:
 */
export type SitePageLink<Title extends string, Description extends string> = {
    /**  The `readonly id: string` property in the `SitePageLink` type is defining a property called `id`
     that is of type `string`. The `readonly` keyword indicates that the property is read-only,
     meaning it cannot be modified once it is assigned a value. This property is used to uniquely
     identify each link in the `SitePageLinks` object. */
    readonly id: string,
    /**  The `readonly title: string` property in the `SitePageLink` type is defining a property called `title`
    that is of type `string`. The `readonly` keyword indicates that the property is read-only,
    meaning it cannot be modified once it is assigned a value. This property is used to store the
    title of the link. */
    readonly title: string,
    /**  The `readonly description: string` property in the `SitePageLink` type is defining a property called `description`
    that is of type `string`. The `readonly` keyword indicates that the property is read-only,
    meaning it cannot be modified once it is assigned a value. This property is used to store the
    description of the link. */
    readonly description: string,
    /**  The `readonly path: string` property in the `SitePageLink` type is defining a property called `path`
    that is of type `string`. The `readonly` keyword indicates that the property is read-only,
    meaning it cannot be modified once it is assigned a value. This property is used to store the
    path of the link. */
    readonly path: string,
    /**  The `readonly external: boolean` property in the `SitePageLink` type is defining a property called `external`
    that is of type `boolean`. The `readonly` keyword indicates that the property is read-only,
    meaning it cannot be modified once it is assigned a value. This property is used to determine
    whether the link is an external link or an internal link. */
    readonly external: boolean,
    /**  The `readonly externalLink: string | "none"` property in the `SitePageLink` type is defining a property called `externalLink`
    that is of type `string | "none"`. The `readonly` keyword indicates that the property is read-only,
    meaning it cannot be modified once it is assigned a value. This property is used to store the
    external link of the link. */
    readonly externalLink: (string & {}) | "none" | "_external",
    /**  The `readonly internalLink: string | "none" | "_internal"` property in the `SitePageLink` type is defining a property called `internalLink`
    that is of type `string | "none" | "_internal"`. The `readonly` keyword indicates that the property is read-only,
    meaning it cannot be modified once it is assigned a value. This property is used to store the
    internal link of the link. */
    readonly internalLink: (string & {}) | "none" | "_internal"
}


/**
 * The `SitePageLinks` type defines a nested object structure representing different types of links for
 * different user types on a website.
 * @property main - This property represents links related to retailers. It includes links for
 * help, privacy, terms, getting started and more.
 * @property customer - The `customer` property in the `SitePageLinks` type represents links that are
 * specific to customers. It includes links such as help, privacy, terms, store request, contact us, about us and more.
 * @property admin - The `admin` property in the `SitePageLinks` type represents links that are
 * specific to the admin portal or any other admin sites. It includes links such as help and more.
 * @property misc - The `misc` property in the `SitePageLinks` type represents miscellaneous links that
 * are not specific to any particular user type. It includes links such as become a shopa, become a
 * retail partner, contact us, about us, careers, investors, press and more.
 * @property dummy - The `dummy` property in the `SitePageLinks` type is defining a nested object that
 * represents a dummy link. It has a single property `test` which is of type `SitePageLink<"test",
 * "test">`.
 */
export type SitePageLinks = {
    readonly main: {
        help: SitePageLink<"Help", "Help link">,
        privacy: SitePageLink<"Privacy", "Privacy link">,
        terms: SitePageLink<"Terms", "Terms link">,
    }
}


/** The `SITELINKS` constant is an object of type `SitePageLinks` that contains all the links for all the user types and miscellaneous links. */
const SITELINKS: SitePageLinks = {
    main: {
        help: {
            id: "main-help",
            title: "Help",
            description: "Main help link",
            path: "https://help.example.com/",
            external: true,
            internalLink: "",
            externalLink: "https://help.example.com/",
        },
        privacy: {
            id: "main-privacy",
            title: "Privacy",
            description: "Main privacy link",
            path: "/legal/privacy",
            external: false,
            internalLink: "/legal/privacy",
            externalLink: "https://example.com/legal/privacy",
        },
        terms: {
            id: "main-terms",
            title: "Terms",
            description: "Main terms link",
            path: "/legal/terms",
            external: false,
            internalLink: "/legal/terms",
            externalLink: "https://example.com/legal/terms",
        },
    }
} as const;

export type TSitePageLinksUnion = keyof SitePageLinks;
export type TSitePageLinks<T extends TSitePageLinksUnion> = SitePageLinks[T];
export type TGetLink<TypeofLink extends TSitePageLinksUnion, Link extends keyof SitePageLinks[TypeofLink]> = SitePageLinks[TypeofLink][Link];
export type TYPEOF = TGetLink<"main", "help">;
export type TTYPEOFSITELINK = TGetLink<"main", "help">;


/**
 * The function GETSITELINK returns a specific link based on the type and name provided.
 * @param {TypeofLink} type - The `type` parameter is a generic type that represents the type of link
 * you want to retrieve. It should be one of the keys of the `SitePageLinks` object.
 * @param {Link} name - The `name` parameter represents the specific link name within the given `type`
 * of link.
 * @returns a link of type `TGetLink<TypeofLink, Link>`.
 */
export const GETSITELINK = <TypeofLink extends TSitePageLinksUnion, Link extends keyof SitePageLinks[TypeofLink]>(type: TypeofLink, name: Link): TGetLink<TypeofLink, Link> => {
    const link = SITELINKS[type][name] as TGetLink<TypeofLink, Link>
    return link;
}


/**
 * The function `GETSITELINKPATH` returns either the external or internal link path based on the
 * provided type, name, and externalOrInternal parameter.
 * @param {TypeofLink} type - The `type` parameter is the type of link you want to retrieve. It should
 * be one of the keys of the `SitePageLinks` object.
 * @param {Link} name - The `name` parameter represents the specific link name within the given `type`
 * of link.
 * @param {"external" | "internal"} externalOrInternal - The parameter "externalOrInternal" is a string
 * that can have two possible values: "external" or "internal". It is used to determine whether the
 * returned link should be an external link or an internal link.
 * @returns either the external link or the internal link based on the value of the
 * "externalOrInternal" parameter.
 */
export const GETSITELINKPATH = <TypeofLink extends TSitePageLinksUnion, Link extends keyof SitePageLinks[TypeofLink]>(type: TypeofLink, name: Link, externalOrInternal: "external" | "internal"): TTYPEOFSITELINK['internalLink'] | TTYPEOFSITELINK['externalLink'] => {
    const link: TTYPEOFSITELINK = GETSITELINK(type, name) as any;
    return externalOrInternal === "external" ? link.externalLink : link.internalLink;
}
export default SITELINKS;