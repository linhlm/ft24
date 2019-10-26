import React from 'react';
import { debounce } from 'lodash';
import { I18n } from 'react-redux-i18n';
import { connect } from 'react-redux';

const KEY_DOWN = 40;
const KEY_UP = 38;
const KEY_ENTER = 13;

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.updateInputValue = debounce(this.updateInputValue, 1500);
  }

  updateInputValue = KeyWord => {
    const {
      typeSearch,
      dateRangeOption,
      fetchListNewsData,
      setQueryNewValue,
    } = this.props;

    if (typeSearch === 'Add') return;

    fetchListNewsData({ KeyWord, ...dateRangeOption });

    const query = KeyWord || null;
    setQueryNewValue(query);
  };

  handleOnChange = e => {
    const { typeSearch, handleChange } = this.props;
    if (typeSearch === 'Add') {
      handleChange(e.target.value);
    } else {
      handleChange(e.target.value);
      this.updateInputValue(e.target.value);
    }
  };

  handleClick = e => {
    this.props.handleChange(e.target.value);
  };

  getPlaceHolder = () => {
    const { typeSearch, textSearch } = this.props;
    if (typeSearch === 'Search') {
      if (textSearch) {
        return textSearch;
      }
      return I18n.t('common.searchAdd.search');
    }
    return I18n.t('common.searchAdd.add');
  };

  onKeyDown = e => {
    const { scrollView, enterKeyBoard, isShowSearchList } = this.props;
    if (!isShowSearchList) {
      if (e.keyCode === KEY_ENTER) {
        this.updateInputValue.cancel();
        const {
          dateRangeOption,
          fetchListNewsData,
          setQueryNewValue,
        } = this.props;
        const KeyWord = e.target.value;
        fetchListNewsData({ KeyWord, ...dateRangeOption });

        const query = KeyWord || null;
        setQueryNewValue(query);
      }
    } else {
      switch (e.keyCode) {
        case KEY_ENTER:
          enterKeyBoard();
          break;
        case KEY_DOWN:
          scrollView(1);
          break;
        case KEY_UP:
          scrollView(-1);
          break;
      }
    }
  };

  render() {
    const disabled = this.props.disabled ? this.props.disabled : false;
    const cursor = this.props.disabled ? { cursor: 'not-allowed' } : {};

    return (
      <>
        <input
          disabled={disabled}
          ref={this.props.inputRef}
          type="search"
          placeholder={this.getPlaceHolder()}
          onClick={this.handleClick}
          onChange={this.handleOnChange}
          onKeyDown={this.onKeyDown}
          style={cursor}
        />
        <button type="button" style={{ cursor: 'pointer' }}>
          <i className="icon-search" />
        </button>
      </>
    );
  }
}

const mapStateToProps = state => ({
  i18n: state.i18n,
});

export default connect(mapStateToProps)(SearchBox);
