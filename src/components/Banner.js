import React from 'react';
import { Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -30 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '400px',
        background: 'linear-gradient(to right, #1a237e, #0d47a1)', // Gradient background
        color: '#fff', // Text color
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Typography variant="h1" style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Build Your Dream PC
        </Typography>
        <Typography variant="h2" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
          Customize and Assemble the Perfect PC for Your Needs
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <Button variant="contained" style={{ padding: '1rem 2rem', fontSize: '1.2rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
          <Link href={'/pcBuilder'} >Build Pc</Link>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
