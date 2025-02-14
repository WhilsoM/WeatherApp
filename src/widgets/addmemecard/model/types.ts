export interface IAddMemeForm {
  handleSubmit: (e: React.FormEvent) => void;
  imageUrl: string;
  setImageUrl: (e: any) => void;
  userName: string;
  setUserName: (e: any) => void;
  title: string;
  setTitle: (e: any) => void;
  editingCard: any;
  setEditingCard: any;
}
