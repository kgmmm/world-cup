import { decode } from "$lib/share";

export function match(param) {
  if(!param.match(/^[a-z0-9]{16}$/g)) return false;
  if(!param.substring(0, 8).match(/^[a-x]{8}$/g)) return false;
  if(!param.substring(8).match(/^[0-9a-f]{8}$/g)) return false;

  const decoded = decode(param);
  
  if(decoded[1].length !== 15) return false;

  let valid = true;

  decoded[1].forEach(winner => {
    if(winner === undefined) valid = false;
  });

  return valid;
}