export interface NewsFeedResponseRootObject {
  stories: NewsFeedResponseStoriesItem[];
  counts: any;
  status: string;
  next_max_id?: string;
}

export class NewsFeedResponseStoriesItem {
  type: string;
  story_type: number;
  args: any;
  pk: string;
  
  constructor(client: any) {}
}
