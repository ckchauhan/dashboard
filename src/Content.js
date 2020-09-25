import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid, Box, Switch } from '@material-ui/core';
import ProductCard from './ProductCard';
import { expandAllAtom } from './Atoms'
import {
	atom,
	selector,
	useRecoilState,
	useRecoidValue,
} from 'recoil';


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
}));
export default function Content(props) {
	const classes = useStyles();
	const theme = useTheme();
	const { open, data } = props;
	const [expandAll, setExpandAll] = useRecoilState(expandAllAtom);

	const onChange = (event) => {
		setExpandAll(!expandAll);
	}

	return (
		<>
			<Box component="span">
				<Switch
					checked={expandAll}
					onChange={onChange}
					name="Expand All"
					inputProps={{ 'aria-label': 'secondary checkbox' }}
				/>
			</Box>
			<Grid container spacing={1}>
				{data.Products.map((product, index) => (
					<Grid item xs={12} sm={6} md={4}>
						<ProductCard product={product} />
					</Grid>
				))}
			</Grid>
		</>
	)
}
