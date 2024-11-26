export enum VisionItemId {
  KNOWLEDGE = "knowledge",
  TECHNOLOGY = "technology",
  INNOVATION = "innovation",
}

export interface VisionItem {
  id: VisionItemId;
  title: string;
  content: string;
}
