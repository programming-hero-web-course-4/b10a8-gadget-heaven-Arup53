export async function loader() {
  const res = await fetch("/gadgetdata.json");
  const data = await res.json();
  return data;
}
