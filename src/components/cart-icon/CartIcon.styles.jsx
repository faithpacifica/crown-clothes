import styled from "styled-components";
import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const ShoppingIcon = styled(ShoppingSvg)`
  width: 26px;
  height: 26px;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 12px;
  color: red;
  font-weight: bold;
  bottom: 12px;
`;
