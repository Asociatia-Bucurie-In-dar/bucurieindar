export type BlogArticleType = {
    article_id: string; //Primary Key
    title: string;
    image_url: string;
    date: string;
    content: string;
    category: string;
};

export type ProjectType = {
    project_id: string; //Primary Key
    title: string;
    image_url: string;
    content: string;
    currentAmount: number;
    goalAmount: number;
};

export type Donation = {
    donation_id: string; //Primary Key
    project_id: string; //Foreign Key
    donor_id: string; //Foreign Key
    stripe_payment_id: string;
    
    amount: number;
    message: string;
    
    currency: string;
    donation_date: string;
    payment_method: string;
    
    is_anonymous: boolean;
    is_from_organization: boolean;
    organization_name: string;
};

export type Donor = {
    donor_id: string; //Primary Key
    first_name: string;
    last_name: string;
    email: string;
};