import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    padding: 14px;
`;

export const Title = styled.Text`
    font-weight: bold;
    color: #fff;
    font-size: ${props => props.size}px;
`;

export const RateContainer = styled.View`
    flex-direction: row;
    align-items: center;
    padding-top: 4px;
`;

export const Rate = styled.Text`
    color: #FFF;
    padding-left: 4px;
    font-size: 12px;
    padding-top: 4px;
`;

export const ActionContainer = styled.View`
    flex-direction: row;
    align-items: center;
    padding-top: 8px;
`;

export const DetailButton = styled.TouchableOpacity`
    width: 85%;
    height: 30px;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background-color: #E72F49;
`;

export const DeleteButton = styled.TouchableOpacity`
    width: 15%;
    height: 30px;
    justify-content: center;
    align-items: center;
`;