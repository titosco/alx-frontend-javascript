export default function createInt8TypedArray(length, position, value){
    const arr = new ArrayBuffer(length);
  const vals = new DataView(arr);

  try {
    vals.setInt8(position, value);
  } catch (e) {
    throw Error('Position outside range');
  }
  return vals;
}