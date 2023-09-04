import React from 'react'
import { css } from '@emotion/react'
import { BeatLoader } from 'react-spinners'
import { useApp } from '../../contexts/appContext'
const override = css`
	display: block;
	margin: 0 auto;
	border-color: red;
`

function LoadingSpinner() {
   const {isLoading} = useApp()
	return (
		<div className='loading-spinner'>
			<BeatLoader css={override} size={50} color={"#833AE0"} loading={isLoading} />
		</div>
	)
}

export default LoadingSpinner
