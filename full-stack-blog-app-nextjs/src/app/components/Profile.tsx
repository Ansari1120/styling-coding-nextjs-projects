import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

export async function fetchSession() {
  const getsession = await getServerSession(options);
  return getsession;
}
export default fetchSession;
