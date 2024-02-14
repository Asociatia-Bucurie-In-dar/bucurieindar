export type BlogArticleType = {
    id: string; //Primary Key
    slug: string;
    
    title: string;
    image_name: string;
    date: string;
    content: string;
    category: string;
};

export type ProjectType = {
    id: string; //Primary Key
    slug: string;
    
    title: string;
    image_path: string;
    content: string;
    currentAmount: number;
    goalAmount: number;
};

export type Donation = {
    id: string; //Primary Key
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
    id: string; //Primary Key
    first_name: string;
    last_name: string;
    email: string;
};