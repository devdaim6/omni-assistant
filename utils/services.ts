import funzone from "@/public/Assets/funzone.jpg";
import chatmeh from "@/public/Assets/chatmeh.jpg";
import recipe from "@/public/Assets/recipe.jpg";
import pdf from "@/public/Assets/pdftalks.jpg";
export const services = [
  {
    title: "Chat meh",
    description: `Conversational AI: Recall interactions. Quick Chat: Swift, context-free exchanges`,
    link: "/chatmeh",
    img: chatmeh,
  },

  {
    title: "Pdf Talks",
    description:
      "Upload PDFs, discuss content, explore topics, and share insights.",
    img: pdf,
    link: "/pdf-interaction",
  },
  {
    title: "Recipe Generator",
    description: `Create recipes from text or images, catering to preferences and capturing visual essence.`,
    img: recipe,
    link: "/recipe-generator",
  },
  {
    title: "Fun Zone",
    description:
      "Challenge perception with engaging image tasks in Fun Zone—object counting and item identification.",
    img: funzone,
    link: "/fun-zone",
  },
];
