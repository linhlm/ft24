import React, { Component } from 'react';
import Watchlist from '../market/watchlist';
import widgetConfig from './../../configs/WidgetConfig';
import { I18n } from 'react-redux-i18n';
import AlertTemplate from '../common/alert-template';
import { setUserInfo } from '../app/reducer';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LayoutHelper from '../helpers/Layout';
import MainLayout from './../main-layout';
import GoldenLayoutWrapper from '../common/GoldenLayoutWrapper';
import Modal from '../common/securities-firms';
import IntroModal from '../common/intro-modal';


import { positions, Provider as AlertProvider, transitions } from 'react-alert';


const options = {
  timeout: 10000,
  position: positions.BOTTOM_LEFT,
  transitions: transitions.SCALE,
  containerStyle: {
    zIndex: 9999999,
    maxHeight: 435,
    display: 'flex',
    flexDirection: 'column-reverse',
    overflow: 'hidden',
  },
};

const objComponent = {
  Watchlist
};

class Desktop extends Component {
  constructor(props) {
    super(props);
    this.listComponent = {};
    widgetConfig.forEach(item => {
      item.list.forEach(item2 => {
        this.listComponent[item2.name] = React.createRef();
      });
    });
  }

  componentDidMount() {
    const listComponentTitle = I18n.t('common.listComponent');

    widgetConfig.forEach(item => {
      item.list.forEach(({ name }) => {
        const component = {
          name,
          component: objComponent[name],
          title: listComponentTitle[name],
          tooltip: listComponentTitle[name],
        };

        LayoutHelper.register(component);
        LayoutHelper.drag(this.listComponent[name].current, component);
      });
    });

    const { setUserInfo } = this.props;
    
  }

  render() {
    return (
      <AlertProvider template={AlertTemplate} {...options}>
        <MainLayout {...this.listComponent}>
          <GoldenLayoutWrapper store={this.props.store}/>
          <Modal />
          <IntroModal />
        </MainLayout>
      </AlertProvider>
    );
  }
}

const mapDispatchToProps = {
  setUserInfo,
};

Desktop.propTypes = {
  setUserInfo: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(Desktop);
