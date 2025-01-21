import React from 'react';
import PropTypes from 'prop-types';
import YesNoSelector from '../common/YesNoSelector';
import SelectorWithComments from '../common/SelectorWithComments';
import TextAreaField from '../common/TextAreaField';
import Description from '../common/Description';

export default function InfoArticle({
  title,
  descriptionTag,
  fieldName,
  options,
  placeholder,
  useSelectorWithComments,
  useTextArea,
  textAreaPlaceholder,
}) {
  return (
    <article className="article">
      <div className="article_head">
        <div className="title title-article">{title}</div>
      </div>
      <div className="article_body">
        <div className="form_controls">
          <div className={`control ${useSelectorWithComments || useTextArea ? 'control-g24' : ''}`}>
            <span className="control_title control_title-notice">
              {title}
              {descriptionTag && <Description tag={descriptionTag} />}
            </span>

            <YesNoSelector labelYes="Да" labelNo="Нет" fieldName={fieldName} />

            {useSelectorWithComments && (
              <SelectorWithComments
                options={options}
                placeholder={placeholder}
                fieldName={fieldName + 'List'}
              />
            )}

            {useTextArea && (
              <TextAreaField
                id={fieldName + 'Comment'}
                name={fieldName + 'Comment'}
                placeholder={textAreaPlaceholder}
              />
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

InfoArticle.propTypes = {
  title: PropTypes.string.isRequired,
  descriptionTag: PropTypes.string,
  fieldName: PropTypes.string.isRequired,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  useSelectorWithComments: PropTypes.bool,
  useTextArea: PropTypes.bool,
  textAreaPlaceholder: PropTypes.string,
};

InfoArticle.defaultProps = {
  descriptionTag: '',
  options: [],
  placeholder: '',
  useSelectorWithComments: false,
  useTextArea: false,
  textAreaPlaceholder: '',
};
