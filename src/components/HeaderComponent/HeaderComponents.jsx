import React from "react";
import { Col } from "antd";
import { WrapperHeaderAccount, WrapperHeader, WrapperTextHeader, WrapperTextHeader12 } from "./style";
import Search from "antd/es/transfer/search";
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const HeaderComponent = () => {
    return (
        <WrapperHeader gutter={16}>
            <Col span={6}>
                <WrapperTextHeader>
                    Nhom23
                </WrapperTextHeader>
            </Col>
            <Col span={12}>
                <Search
                    placeholder="input search text"
                    enterbutton
                />
            </Col>
            <Col span={6} style={{display: 'flex', gap: '20px'}}>
                <WrapperHeaderAccount>
                    <UserOutlined style={{ fontSize: '30px' }} />
                    <div><WrapperTextHeader12>Đăng nhập/Đăng ký</WrapperTextHeader12>
                        <div>
                        <WrapperTextHeader12>Tài khoản</WrapperTextHeader12>
                        <CaretDownOutlined />
                        </div>
                    </div>
                </WrapperHeaderAccount>
                <div>
                    <div>
                        <ShoppingCartOutlined style={{ fontSize: '30px', color: 'white' }} /> {/* Set color to white */}
                        <WrapperTextHeader12>Giỏ hàng</WrapperTextHeader12>
                    </div>
                </div>
            </Col>
        </WrapperHeader>
    );
};

export default HeaderComponent;
