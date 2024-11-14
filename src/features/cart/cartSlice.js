import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // 현재 담겨있는 애들, 전체가격, 전체 수량
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
};

const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        // 수량 추가, 수량 감소, 전체 데이터 계산, 장바구니 추가, 완전삭제
        addItem: (state, action) => {
            const { id, name, price, description, image } = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({
                    id,
                    name,
                    image,
                    price,
                    description,
                    quantity : 1
                })
            }
            state.totalPrice += action.payload.price; // 전체 가격 업데이트
            state.totalQuantity += 1; // 전체 수량 업데이트
        },
        minusItem: (state, action) => {
            const { id } = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
                state.totalPrice -= action.payload.price; // 전체 가격 업데이트
                state.totalQuantity -= 1; // 전체 수량 업데이트
            }
        },
        clearItems: (state) => {
            state.items = [];
            state.totalPrice = 0;
            state.totalQuantity = 0;
        },
        deleteItem: (state, action) => {
            const { id, price, quantity } = action.payload;
            const filterItems = state.items.filter(cart => cart.id !== id);
            state.totalQuantity -= quantity;
            state.totalPrice -= price * quantity;
            state.items = filterItems;
        }
    }
});
// cartSlice.actions는 cartSlice에서 정의한 액션 생성자들을 포함한 객체입니다
// 액션 생성자들을 각각 추출해서 개별적인 변수로 만들어 export하는 코드입니다.
export const { minusItem, addItem, clearItems, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;