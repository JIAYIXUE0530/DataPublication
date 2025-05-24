import { fetchItem } from "@digitalculture/ochre-sdk";

export async function load() {
    const { error, item } = await fetchItem(
        "240e6e06-9d05-4210-aa83-f4190639886d",
        "set",
        "spatialUnit"
    );
    if (error) {
        throw new Error(error)
    }

    return item;
}
