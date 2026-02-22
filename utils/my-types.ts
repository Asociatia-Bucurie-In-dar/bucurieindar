export type BlogArticleType = {
    id: string; //Primary Key
    slug: string;
    
    image_name: string;
    translation_key: string;
};

export type SitemapEntry ={
    url: string;
    lastModified: Date;
    changeFrequency: string;
    priority: number;
    alternates: {
        languages: {
            ro: string;
            en: string;
        };
    };
};

export type ProjectType = {
    id: string; //Primary Key
    slug: string;
    
    is_campaign: boolean;
    campaign_end_date?: string;
    
    translation_key: string;
    image_path: string;
    other_images: GalleryImage[];
    other_videos: GalleryVideo[];
    goalAmount: number;
    currentAmount: number;
    currentAmountExtra: number;
};

export type Donation = {
    id: string;
    project_id: string;
    donor_id: string;
    
    amount: number;
    message: string;
    
    currency: string;
    donation_date: string;
    payment_method: string;
    
    is_anonymous: boolean;
    is_from_organization: boolean;
    organization_name: string;
};

export type ProjectTranslationsType = {
    TransferWarningSecondPart: string;
    TransferWarningFirstPart: string;
    Donate: string;
    Options: string;
    CardOption: string;
    BankTransferOption: string;
    DesiredAmount: string;
    Continue: string;
    DonateFor: string;
    HowToDonate: string;
    BankTransferDescription: string;
    RevolutDescription: string;
    Beneficiary: string;
    Swift: string;
    IbanRomania: string;
    IbanInternational: string;
    IAgreeWith: string;
    TermsAndConditions: string;
    And: string;
    PrivacyPolicy: string;
    Locale: string;
}

export type ContactTranslationType = {
    FormTitle: string;
    Disclaimer: string;
    Email: string;
    Phone: string;
    Address: string;
    WorkingHours: string;
    Name: string;
    YourMessage: string;
    Send: string;
    Success: string;
    Error: string;
    MaterialGoodsTitle: string;
    MaterialGoodsDescription: string;
    SeeCocosMap: string;
    InConstruction: string;
};

export type CookiesTranslationType = {
    Title: string;
    TextFirst: string;
    PrivacyPolicy: string;
    PrivacyPolicyLink: string;
    And: string;
    TermsAndConditions: string;
    TermsAndConditionsLink: string;
    Accept: string;
    MoreInfo: string;
};

export type GalleryVideo = {
    title: string;
    youtubeId: string;
};

export type GalleryImage = {
    title: string;
    image: string;
    positionPercent?: string;
};

export type GalleryTranslations = {
    ShowMore: string;
    Hide: string;
};