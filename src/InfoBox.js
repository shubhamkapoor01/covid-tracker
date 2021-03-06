import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'

function InfoBox({ title, cases, total }) {
	return (
		<div>
			<Card>
				<CardContent>
					{/* title */}
					<Typography className="infoBox__title" color="textSecondary">
						{title}
					</Typography>
					{/* no cases today */}
					<h2 className="infoBox__cases"> {cases} </h2>
					{/* total cases */}
					<Typography className="infoBox__total" color="textSecondary">
						{total} Total
					</Typography>
				</CardContent>
			</Card>
		</div>
	)
}

export default InfoBox
