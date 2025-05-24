import { fetchItem } from "@digitalculture/ochre-sdk";

export async function load({ params }) {
  const { error, item } = await fetchItem(
    params.uuid,
    "spatialUnit"
  );
  
  if (error) {
    throw new Error(error);
  }
  
  return item;
}
