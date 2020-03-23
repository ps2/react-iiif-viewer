import React from 'react'
import PropTypes from 'prop-types'
import styled from "@emotion/styled";
import ViewerButton from './ViewerButton'
import plus from './images/plus.svg'
import minus from './images/minus.svg'

const ZoomControlsWrapper = styled.div`
  position: absolute;
  padding: 10px 10px 0 0;
  top: 0;
  right: 0;

  & button:first-of-type  {
    border-radius: 4px 4px 0 0;
    border-bottom: 1px solid #A9A9A9 !important;
  }

  & button:last-of-type {
    border-radius: 0 0 4px 4px;
  }
`

const ZoomControls = ({zoomInButtonId, zoomOutButtonId}) => {
  return (
    <ZoomControlsWrapper>
      <ViewerButton id={zoomInButtonId} iconSrc={plus} altText='zoom in' />
      <ViewerButton id={zoomOutButtonId} iconSrc={minus} altText='zoom out' />
    </ZoomControlsWrapper>
  )
}

ZoomControls.propTypes = {
  zoomInButtonId: PropTypes.string.isRequired,
  zoomOutButtonId: PropTypes.string.isRequired
}

export default ZoomControls
