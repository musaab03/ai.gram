import { surpriseMePrompts } from "../constants/suprisePrompts";
import FileSaver from "file-saver";

export const getRandomPrompt: any = (prompt: string) => {
  const randomIndex: number = Math.floor(
    Math.random() * surpriseMePrompts.length
  );
  const randomPrompt: string = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
};

export const downloadImage = async (_id: string, photo: string) => {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
};
