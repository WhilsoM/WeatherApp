import { MemeCardProps } from "@/types/types";

export type TRenderMemes = {
  memeCards: MemeCardProps[];
  handleEdit: (arg: any) => void;
  handleDelete: (arg: any) => void;
};
