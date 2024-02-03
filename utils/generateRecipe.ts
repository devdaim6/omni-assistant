import geminiClient from "@/lib/geminiClient";
export async function generateRecipeThroughPrompt(
  prompt: string,
  updateResult: (text: string) => void
) {
  const { model, generationConfig, safetySettings } = await geminiClient(
    "gemini-pro"
  );
  const parts = [
    {
      text: "Accurately give me the best  recipe and provide an appropriate and recipe consistent with your analysis. ",
    },
    {
      text: "Generate a versatile and flavorful recipe that can be enjoyed by a wide audience. Include a variety of ingredients, clear and concise step-by-step instructions, and suggestions for possible ingredient substitutions. Consider dietary preferences such as vegetarian or gluten-free options. Aim for a balanced and delicious dish suitable for both casual meals and special occasions. ",
    },
    { text: prompt },
  ];

  const result = await model?.generateContentStream({
    contents: [{ role: "user", parts }],
    generationConfig,
    safetySettings,
  });
  let text = "";
  for await (const chunk of result?.stream) {
    const chunkText = chunk?.text();
    console.log(chunkText);
    text += chunkText;
    updateResult(text);
  }
}

export async function fileToGenerativePart(file: any) {
  const base64EncodedDataPromise = new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result.split(",")[1]);
      } else {
        reject(new Error("File reading failed"));
      }
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
  return {
    inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
  };
}

export async function generateRecipeThroughImage(
  image: any,
  updateResult: (text: string) => void
) {
  const { model, generationConfig, safetySettings } = await geminiClient(
    "gemini-pro-vision"
  );

  const inlineDataPart = await fileToGenerativePart(image);
  const parts = [
    {
      text: "Accurately give me the best recipe and provide an appropriate recipe consistent with your analysis.",
    },
    {
      text: "Generate a versatile and flavorful recipe that can be enjoyed by a wide audience. Include a variety of ingredients, clear and concise step-by-step instructions, and suggestions for possible ingredient substitutions. Consider dietary preferences such as vegetarian or gluten-free options. Aim for a balanced and delicious dish suitable for both casual meals and special occasions.",
    },
    inlineDataPart,
  ];

  // const result = await model.generateContent(parts);

  // if (result?.text) {
  //   updateResult(result.text);
  // } else {
  //   updateResult("Failed to generate recipe.");
  // }
}
