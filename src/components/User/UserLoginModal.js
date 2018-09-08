import React,{ Component } from 'react';
import * as styles from './UserLoginModal.css';
import { Modal } from 'antd';
import UserLogin from './../../pages/User/index';
const UserLoginModal = (props) => {
  const { visible, handleCancel } = props;
  return (
    <div>
      <Modal
          className="login-modal"
          title="登录"
          visible={visible}
          onCancel={handleCancel}
          confirmLoading={false}
          closable={false}
          footer={null}
          zIndex={2}
        >
        <UserLogin />
      </Modal>
    </div>
  );
}
export default UserLoginModal;