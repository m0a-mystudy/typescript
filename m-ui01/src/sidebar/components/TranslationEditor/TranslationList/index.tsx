// tslint:disable-next-line:no-unused-variable
import * as React from 'react';

import { TranslationCell } from './TranslationCell';
import { Content, TransPair } from 'taiyaku-node';

interface TranslationListProps {
  content: Content;
  onChange: (index: number, pair: TransPair) => void;
}

export const TranslationList = (props: TranslationListProps) => {
  const {content, onChange}= props;

  return (<div>{
    content.pairs.map(pair =>
      <TranslationCell
        pair={pair}
        index={content.pairs.indexOf(pair)}
        key={`${content.pairs.indexOf(pair)}:${pair.prevHash}`}
        onReflect={(newPair) => {
          onChange(content.pairs.indexOf(pair),newPair);
        }}
      />)
  }
    }</div>);
};

