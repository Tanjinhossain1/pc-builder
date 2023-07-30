import React from 'react';
import { Typography, Link, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, translateY: 30 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1 }}
      style={{
        backgroundColor: '#1a237e', // Footer background color
        color: '#fff', // Text color
        padding: '3rem 0',

      }}
    >
      <Grid container justifyContent="center" spacing={3}>
        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Typography sx={{ml: 2}} variant="h6" style={{ marginBottom: '1rem' }}>
              About Us
            </Typography>
            <Typography sx={{ml: 2}} variant="body2">
              We are a leading provider of custom-built PCs, offering a wide range of
              high-performance components to build your dream computer.
            </Typography>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <Typography variant="h6" style={{ marginBottom: '1rem' }}>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: contact@yourwebsite.com
            </Typography>
            <Typography variant="body2">
              Phone: +1 (123) 456-7890
            </Typography>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            <Typography variant="h6" style={{ marginBottom: '1rem' }}>
              Follow Us
            </Typography>
            {/* Replace "#" with your social media links */}
            <Link href="#" color="inherit" style={{ margin: '0.5rem' }}>
              Twitter
            </Link>
            <Link href="#" color="inherit" style={{ margin: '0.5rem' }}>
              Facebook
            </Link>
            <Link href="#" color="inherit" style={{ margin: '0.5rem' }}>
              Instagram
            </Link>
          </motion.div>
        </Grid>
      </Grid>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        style={{ marginTop: '3rem' }}
      >
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Your Website Name. All rights reserved.
        </Typography>
        <Typography variant="body2" align="center">
          Built with Next.js and Material-UI
        </Typography>
      </motion.div>
      <Box mt={5} align="center">
        <motion.div
          initial={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          <Typography variant="body2" align="center">
            Privacy Policy | Terms of Service
          </Typography>
        </motion.div>
      </Box>
    </motion.footer>
  );
};

export default Footer;
