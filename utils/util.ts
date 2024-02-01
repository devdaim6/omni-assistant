export const getBase64 = async (image: any) => {
  const reader = new FileReader();
  reader.readAsDataURL(image);
  reader.onload = () => {
    return reader.result as string;
  };
};
