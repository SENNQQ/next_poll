import {MetadataRoute} from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${process.env.NEXTAUTH_URL}`,
            lastModified: new Date(),
        },
    ]
}
