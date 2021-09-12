import { FC } from 'react';
import styled from 'styled-components'
import { useAppSelector } from '@state/hooks';
import { UiSkeleton } from '@components/ui/index';

interface BorrowDetailsProps {
  currentLTVRatio: number;
}

const BorrowDetails: FC<BorrowDetailsProps> = (props) => {
  const { 
    maxLTVRatio,
    isMaxLTVRatioLoading,
    collateralPriceUSD,
    isCollateralPriceLoading,
  } = useAppSelector(state => state.lending);

  return (
    <DetailsWrapperStyled>
      <DetailStyled className="detail">
        <div>
          <span className="text-small">Current LTV Ratio</span>
        </div>

        <div>
          <span className="text-small text-alternative">
            {props.currentLTVRatio}%
          </span>
        </div>
      </DetailStyled>
      
      <DetailStyled className="detail">
        <div>
          <span className="text-small">Maximum LTV Ratio</span>
        </div>

        <div>
          { isMaxLTVRatioLoading ? (
            <UiSkeleton width={50} height={16} />
          ) : (
            <span className="text-small text-alternative">
              {maxLTVRatio}%
            </span>
          )}
        </div>
      </DetailStyled>

      <DetailStyled className="detail">
        <div>
          <span className="text-small">ETH Price</span>
        </div>

        <div>
          { isCollateralPriceLoading ? (
            <UiSkeleton width={80} height={16} />
          ) : (
            <span className="text-small text-alternative">
              ${ collateralPriceUSD } USD
            </span>
          )}
        </div>
      </DetailStyled>
    </DetailsWrapperStyled>
  );
}

const DetailsWrapperStyled = styled.div`
  & .detail {
    margin-bottom: 6px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const DetailStyled = styled.div`
  display: flex;
  font-weight: 500;
  align-items: center;
  justify-content: space-between;
`;

export default BorrowDetails;
