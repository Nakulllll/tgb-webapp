import { useRouter } from 'next/router';

const MentorCategoryPage = () => {
    const router = useRouter();
    const { category } = router.query; // "category" will contain the value from the URL



    return (
        <div>
            <h1>Mentors in {category}</h1>
            {/* Render mentor data for the specific category here */}
        </div>
    );
};

export default MentorCategoryPage;
