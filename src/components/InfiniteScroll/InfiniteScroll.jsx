import React, { useEffect } from 'react';

const InfiniteScroll = ({ children, fetchMoreData }) => {
    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight - 5) {
                fetchMoreData();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [fetchMoreData]);

    return <>{children}</>;
};

export default InfiniteScroll;
