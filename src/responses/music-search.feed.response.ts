export interface MusicSearchFeedResponseRootObject {
  items: MusicSearchFeedResponseItemsItem[];
  status: string;
}

export interface MusicSearchFeedResponseItemsItem {
  track: any;
  [key: string]: any;
}
