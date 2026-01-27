export const addToRecent = (id) => {
    try {
        let recent = JSON.parse(localStorage.getItem('recentViewed') || '[]');
        // Remove if exists to push to top
        recent = recent.filter(pid => pid !== id);
        recent.unshift(id);
        // Limit to 10
        if (recent.length > 10) recent.pop();
        localStorage.setItem('recentViewed', JSON.stringify(recent));
    } catch (e) {
        console.error('Error saving recent:', e);
    }
}

export const getRecentIds = () => {
    try {
        return JSON.parse(localStorage.getItem('recentViewed') || '[]');
    } catch (e) {
        return [];
    }
}
