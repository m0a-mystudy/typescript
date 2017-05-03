import { Action } from '../actions/types';
import { ContentInfo } from '../storage';
// import {newContent} from 'taiyaku-node';
// import {sample} from '../../pegjs.sample';
export interface FilterState {
  dontTranslate: boolean; //翻訳対象か
  isEdited: boolean; //編集されているか？
  filterText?: string; //フィルタ文字列

}
export interface TranslationEditorState {
  url: string;
  contentLoading: boolean;
  contentUploadng: boolean;
  translationRunning: boolean;
  filters: FilterState;
  contentInfo: ContentInfo;
}

const initFilterState: FilterState = {
  dontTranslate: false,
  isEdited: false,
};


// let body = document.createElement('body');
// body.innerHTML = sample;
// let content = newContent('pegjs.org', body);

const initContentInfo: ContentInfo = {
  contentList: {},
  selectId: "0"
};

const initTranslationEditorState: TranslationEditorState = {
  url: '',
  contentLoading: true,
  contentUploadng: false,
  translationRunning: false,
  filters: initFilterState,
  contentInfo: initContentInfo
};

export function translationEditor(state: TranslationEditorState = initTranslationEditorState,
  action: Action) {
  switch (action.type) {
    case 'SET_CONTENT':
      const content = action.content;
      let id = Date().toString();
      if (content.id) {
        id = content.id;
      }
      let selectIdList: string[];
      if (state.contentInfo.selectIdList) {
        selectIdList = [...state.contentInfo.selectIdList, id];
      } else {
        selectIdList = [id];
      }

      return Object.assign({}, state, <TranslationEditorState>{
        contentInfo: {
          contentList: {
            [id]: content
          },
          selectId: id,
          selectIdList
        }
      });
    case 'SELECT_CONTENT_ID':
      return Object.assign({}, state, <TranslationEditorState>{
        contentInfo: {
          selectId: action.id
        }
      });
    default:
      return state;
  }
}
