import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Form from './Form';
const LoginPage = () => {
	//theme
	const isNonMobileScreens = useMediaQuery('(min-width:1000px)');
	const theme = useTheme();
	const altBg = theme.palette.background.altBg;
	return (
		<Box
			width='100%'
			backgroundColor={altBg}
			p='1rem 6%'
			textAlign='center'>
			<Box>
				<Typography
					fontWeight='bold'
					fontSize='2rem'
					color='primary'>
					Sociopedia
				</Typography>
			</Box>

			{/* Form */}
			<Box
				width={isNonMobileScreens ? '50%' : '90%'}
				p='2rem'
				m='2rem auto'
				borderRadius='1.5rem'
				backgroundColor={altBg}>
				<Typography
					fontWeight='500'
					variant='h5'
					sx={{ mb: '1.5rem' }}>
					Welcome to Sociopedia, Social Media platform for sociopaths
				</Typography>
				<Form />
			</Box>
		</Box>
	);
};

export default LoginPage;
