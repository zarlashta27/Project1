// reference list of all Eventbrite categories and their IDs for search purposes
// Scroll to line 185 for list of subcategories

var eventCategories = {
    "locale": "en_US",
    "pagination": {
        "object_count": 21,
        "page_number": 1,
        "page_size": 50,
        "page_count": 1,
        "has_more_items": false
    },
    "categories": [
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/categories/103/",
            "id": "103",
            "name": "Music",
            "name_localized": "Music",
            "short_name": "Music",
            "short_name_localized": "Music"
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/categories/101/",
            "id": "101",
            "name": "Business & Professional",
            "name_localized": "Business & Professional",
            "short_name": "Business",
            "short_name_localized": "Business"
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/categories/110/",
            "id": "110",
            "name": "Food & Drink",
            "name_localized": "Food & Drink",
            "short_name": "Food & Drink",
            "short_name_localized": "Food & Drink"
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/categories/113/",
            "id": "113",
            "name": "Community & Culture",
            "name_localized": "Community & Culture",
            "short_name": "Community",
            "short_name_localized": "Community"
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/categories/105/",
            "id": "105",
            "name": "Performing & Visual Arts",
            "name_localized": "Performing & Visual Arts",
            "short_name": "Arts",
            "short_name_localized": "Arts"
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/categories/104/",
            "id": "104",
            "name": "Film, Media & Entertainment",
            "name_localized": "Film, Media & Entertainment",
            "short_name": "Film & Media",
            "short_name_localized": "Film & Media"
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/categories/108/",
            "id": "108",
            "name": "Sports & Fitness",
            "name_localized": "Sports & Fitness",
            "short_name": "Sports & Fitness",
            "short_name_localized": "Sports & Fitness"
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/categories/107/",
            "id": "107",
            "name": "Health & Wellness",
            "name_localized": "Health & Wellness",
            "short_name": "Health",
            "short_name_localized": "Health"
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/categories/102/",
            "id": "102",
            "name": "Science & Technology",
            "name_localized": "Science & Technology",
            "short_name": "Science & Tech",
            "short_name_localized": "Science & Tech"
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/categories/109/",
            "id": "109",
            "name": "Travel & Outdoor",
            "name_localized": "Travel & Outdoor",
            "short_name": "Travel & Outdoor",
            "short_name_localized": "Travel & Outdoor"
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/categories/111/",
            "id": "111",
            "name": "Charity & Causes",
            "name_localized": "Charity & Causes",
            "short_name": "Charity & Causes",
            "short_name_localized": "Charity & Causes"
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/categories/114/",
            "id": "114",
            "name": "Religion & Spirituality",
            "name_localized": "Religion & Spirituality",
            "short_name": "Spirituality",
            "short_name_localized": "Spirituality"
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/categories/115/",
            "id": "115",
            "name": "Family & Education",
            "name_localized": "Family & Education",
            "short_name": "Family & Education",
            "short_name_localized": "Family & Education"
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/categories/116/",
            "id": "116",
            "name": "Seasonal & Holiday",
            "name_localized": "Seasonal & Holiday",
            "short_name": "Holiday",
            "short_name_localized": "Holiday"
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/categories/112/",
            "id": "112",
            "name": "Government & Politics",
            "name_localized": "Government & Politics",
            "short_name": "Government",
            "short_name_localized": "Government"
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/categories/106/",
            "id": "106",
            "name": "Fashion & Beauty",
            "name_localized": "Fashion & Beauty",
            "short_name": "Fashion",
            "short_name_localized": "Fashion"
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/categories/117/",
            "id": "117",
            "name": "Home & Lifestyle",
            "name_localized": "Home & Lifestyle",
            "short_name": "Home & Lifestyle",
            "short_name_localized": "Home & Lifestyle"
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/categories/118/",
            "id": "118",
            "name": "Auto, Boat & Air",
            "name_localized": "Auto, Boat & Air",
            "short_name": "Auto, Boat & Air",
            "short_name_localized": "Auto, Boat & Air"
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/categories/119/",
            "id": "119",
            "name": "Hobbies & Special Interest",
            "name_localized": "Hobbies & Special Interest",
            "short_name": "Hobbies",
            "short_name_localized": "Hobbies"
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/categories/199/",
            "id": "199",
            "name": "Other",
            "name_localized": "Other",
            "short_name": "Other",
            "short_name_localized": "Other"
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/categories/120/",
            "id": "120",
            "name": "School Activities",
            "name_localized": "School Activities",
            "short_name": "School Activities",
            "short_name_localized": "School Activities"
        }
    ]
};

// ALL Eventbrite Subcategories (the categories they relate to are nested inside each subcategory)
var eventSubcategories = {
    "pagination": {
        "object_count": 197,
        "page_number": 1,
        "page_size": 50,
        "page_count": 4,
        "continuation": "eyJwYWdlIjogMn0",
        "has_more_items": true
    },
    "subcategories": [
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/1001/",
            "id": "1001",
            "name": "Startups & Small Business",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/101/",
                "id": "101",
                "name": "Business & Professional",
                "name_localized": "Business & Professional",
                "short_name": "Business",
                "short_name_localized": "Business"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/1002/",
            "id": "1002",
            "name": "Finance",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/101/",
                "id": "101",
                "name": "Business & Professional",
                "name_localized": "Business & Professional",
                "short_name": "Business",
                "short_name_localized": "Business"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/1003/",
            "id": "1003",
            "name": "Environment & Sustainability",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/101/",
                "id": "101",
                "name": "Business & Professional",
                "name_localized": "Business & Professional",
                "short_name": "Business",
                "short_name_localized": "Business"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/1004/",
            "id": "1004",
            "name": "Educators",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/101/",
                "id": "101",
                "name": "Business & Professional",
                "name_localized": "Business & Professional",
                "short_name": "Business",
                "short_name_localized": "Business"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/1005/",
            "id": "1005",
            "name": "Real Estate",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/101/",
                "id": "101",
                "name": "Business & Professional",
                "name_localized": "Business & Professional",
                "short_name": "Business",
                "short_name_localized": "Business"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/1006/",
            "id": "1006",
            "name": "Non Profit & NGOs",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/101/",
                "id": "101",
                "name": "Business & Professional",
                "name_localized": "Business & Professional",
                "short_name": "Business",
                "short_name_localized": "Business"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/1007/",
            "id": "1007",
            "name": "Sales & Marketing",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/101/",
                "id": "101",
                "name": "Business & Professional",
                "name_localized": "Business & Professional",
                "short_name": "Business",
                "short_name_localized": "Business"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/1008/",
            "id": "1008",
            "name": "Media",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/101/",
                "id": "101",
                "name": "Business & Professional",
                "name_localized": "Business & Professional",
                "short_name": "Business",
                "short_name_localized": "Business"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/1009/",
            "id": "1009",
            "name": "Design",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/101/",
                "id": "101",
                "name": "Business & Professional",
                "name_localized": "Business & Professional",
                "short_name": "Business",
                "short_name_localized": "Business"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/1010/",
            "id": "1010",
            "name": "Career",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/101/",
                "id": "101",
                "name": "Business & Professional",
                "name_localized": "Business & Professional",
                "short_name": "Business",
                "short_name_localized": "Business"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/1011/",
            "id": "1011",
            "name": "Investment",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/101/",
                "id": "101",
                "name": "Business & Professional",
                "name_localized": "Business & Professional",
                "short_name": "Business",
                "short_name_localized": "Business"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/1999/",
            "id": "1999",
            "name": "Other",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/101/",
                "id": "101",
                "name": "Business & Professional",
                "name_localized": "Business & Professional",
                "short_name": "Business",
                "short_name_localized": "Business"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/2001/",
            "id": "2001",
            "name": "Medicine",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/102/",
                "id": "102",
                "name": "Science & Technology",
                "name_localized": "Science & Technology",
                "short_name": "Science & Tech",
                "short_name_localized": "Science & Tech"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/2002/",
            "id": "2002",
            "name": "Science",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/102/",
                "id": "102",
                "name": "Science & Technology",
                "name_localized": "Science & Technology",
                "short_name": "Science & Tech",
                "short_name_localized": "Science & Tech"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/2003/",
            "id": "2003",
            "name": "Biotech",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/102/",
                "id": "102",
                "name": "Science & Technology",
                "name_localized": "Science & Technology",
                "short_name": "Science & Tech",
                "short_name_localized": "Science & Tech"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/2004/",
            "id": "2004",
            "name": "High Tech",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/102/",
                "id": "102",
                "name": "Science & Technology",
                "name_localized": "Science & Technology",
                "short_name": "Science & Tech",
                "short_name_localized": "Science & Tech"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/2005/",
            "id": "2005",
            "name": "Mobile",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/102/",
                "id": "102",
                "name": "Science & Technology",
                "name_localized": "Science & Technology",
                "short_name": "Science & Tech",
                "short_name_localized": "Science & Tech"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/2006/",
            "id": "2006",
            "name": "Social Media",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/102/",
                "id": "102",
                "name": "Science & Technology",
                "name_localized": "Science & Technology",
                "short_name": "Science & Tech",
                "short_name_localized": "Science & Tech"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/2007/",
            "id": "2007",
            "name": "Robotics",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/102/",
                "id": "102",
                "name": "Science & Technology",
                "name_localized": "Science & Technology",
                "short_name": "Science & Tech",
                "short_name_localized": "Science & Tech"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/2999/",
            "id": "2999",
            "name": "Other",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/102/",
                "id": "102",
                "name": "Science & Technology",
                "name_localized": "Science & Technology",
                "short_name": "Science & Tech",
                "short_name_localized": "Science & Tech"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/3001/",
            "id": "3001",
            "name": "Alternative",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/103/",
                "id": "103",
                "name": "Music",
                "name_localized": "Music",
                "short_name": "Music",
                "short_name_localized": "Music"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/3002/",
            "id": "3002",
            "name": "Blues & Jazz",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/103/",
                "id": "103",
                "name": "Music",
                "name_localized": "Music",
                "short_name": "Music",
                "short_name_localized": "Music"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/3003/",
            "id": "3003",
            "name": "Classical",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/103/",
                "id": "103",
                "name": "Music",
                "name_localized": "Music",
                "short_name": "Music",
                "short_name_localized": "Music"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/3004/",
            "id": "3004",
            "name": "Country",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/103/",
                "id": "103",
                "name": "Music",
                "name_localized": "Music",
                "short_name": "Music",
                "short_name_localized": "Music"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/3005/",
            "id": "3005",
            "name": "Cultural",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/103/",
                "id": "103",
                "name": "Music",
                "name_localized": "Music",
                "short_name": "Music",
                "short_name_localized": "Music"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/3006/",
            "id": "3006",
            "name": "EDM / Electronic",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/103/",
                "id": "103",
                "name": "Music",
                "name_localized": "Music",
                "short_name": "Music",
                "short_name_localized": "Music"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/3007/",
            "id": "3007",
            "name": "Folk",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/103/",
                "id": "103",
                "name": "Music",
                "name_localized": "Music",
                "short_name": "Music",
                "short_name_localized": "Music"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/3008/",
            "id": "3008",
            "name": "Hip Hop / Rap",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/103/",
                "id": "103",
                "name": "Music",
                "name_localized": "Music",
                "short_name": "Music",
                "short_name_localized": "Music"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/3009/",
            "id": "3009",
            "name": "Indie",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/103/",
                "id": "103",
                "name": "Music",
                "name_localized": "Music",
                "short_name": "Music",
                "short_name_localized": "Music"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/3010/",
            "id": "3010",
            "name": "Latin",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/103/",
                "id": "103",
                "name": "Music",
                "name_localized": "Music",
                "short_name": "Music",
                "short_name_localized": "Music"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/3011/",
            "id": "3011",
            "name": "Metal",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/103/",
                "id": "103",
                "name": "Music",
                "name_localized": "Music",
                "short_name": "Music",
                "short_name_localized": "Music"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/3012/",
            "id": "3012",
            "name": "Opera",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/103/",
                "id": "103",
                "name": "Music",
                "name_localized": "Music",
                "short_name": "Music",
                "short_name_localized": "Music"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/3013/",
            "id": "3013",
            "name": "Pop",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/103/",
                "id": "103",
                "name": "Music",
                "name_localized": "Music",
                "short_name": "Music",
                "short_name_localized": "Music"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/3014/",
            "id": "3014",
            "name": "R&B",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/103/",
                "id": "103",
                "name": "Music",
                "name_localized": "Music",
                "short_name": "Music",
                "short_name_localized": "Music"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/3015/",
            "id": "3015",
            "name": "Reggae",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/103/",
                "id": "103",
                "name": "Music",
                "name_localized": "Music",
                "short_name": "Music",
                "short_name_localized": "Music"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/3016/",
            "id": "3016",
            "name": "Religious/Spiritual",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/103/",
                "id": "103",
                "name": "Music",
                "name_localized": "Music",
                "short_name": "Music",
                "short_name_localized": "Music"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/3017/",
            "id": "3017",
            "name": "Rock",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/103/",
                "id": "103",
                "name": "Music",
                "name_localized": "Music",
                "short_name": "Music",
                "short_name_localized": "Music"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/3018/",
            "id": "3018",
            "name": "Top 40",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/103/",
                "id": "103",
                "name": "Music",
                "name_localized": "Music",
                "short_name": "Music",
                "short_name_localized": "Music"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/3999/",
            "id": "3999",
            "name": "Other",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/103/",
                "id": "103",
                "name": "Music",
                "name_localized": "Music",
                "short_name": "Music",
                "short_name_localized": "Music"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/4001/",
            "id": "4001",
            "name": "TV",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/104/",
                "id": "104",
                "name": "Film, Media & Entertainment",
                "name_localized": "Film, Media & Entertainment",
                "short_name": "Film & Media",
                "short_name_localized": "Film & Media"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/4002/",
            "id": "4002",
            "name": "Film",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/104/",
                "id": "104",
                "name": "Film, Media & Entertainment",
                "name_localized": "Film, Media & Entertainment",
                "short_name": "Film & Media",
                "short_name_localized": "Film & Media"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/4003/",
            "id": "4003",
            "name": "Anime",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/104/",
                "id": "104",
                "name": "Film, Media & Entertainment",
                "name_localized": "Film, Media & Entertainment",
                "short_name": "Film & Media",
                "short_name_localized": "Film & Media"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/4004/",
            "id": "4004",
            "name": "Gaming",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/104/",
                "id": "104",
                "name": "Film, Media & Entertainment",
                "name_localized": "Film, Media & Entertainment",
                "short_name": "Film & Media",
                "short_name_localized": "Film & Media"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/4005/",
            "id": "4005",
            "name": "Comics",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/104/",
                "id": "104",
                "name": "Film, Media & Entertainment",
                "name_localized": "Film, Media & Entertainment",
                "short_name": "Film & Media",
                "short_name_localized": "Film & Media"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/4006/",
            "id": "4006",
            "name": "Adult",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/104/",
                "id": "104",
                "name": "Film, Media & Entertainment",
                "name_localized": "Film, Media & Entertainment",
                "short_name": "Film & Media",
                "short_name_localized": "Film & Media"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/4007/",
            "id": "4007",
            "name": "Comedy",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/104/",
                "id": "104",
                "name": "Film, Media & Entertainment",
                "name_localized": "Film, Media & Entertainment",
                "short_name": "Film & Media",
                "short_name_localized": "Film & Media"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/4999/",
            "id": "4999",
            "name": "Other",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/104/",
                "id": "104",
                "name": "Film, Media & Entertainment",
                "name_localized": "Film, Media & Entertainment",
                "short_name": "Film & Media",
                "short_name_localized": "Film & Media"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/5001/",
            "id": "5001",
            "name": "Theatre",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/105/",
                "id": "105",
                "name": "Performing & Visual Arts",
                "name_localized": "Performing & Visual Arts",
                "short_name": "Arts",
                "short_name_localized": "Arts"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/5002/",
            "id": "5002",
            "name": "Musical",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/105/",
                "id": "105",
                "name": "Performing & Visual Arts",
                "name_localized": "Performing & Visual Arts",
                "short_name": "Arts",
                "short_name_localized": "Arts"
            }
        },
        {
            "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/5003/",
            "id": "5003",
            "name": "Ballet",
            "parent_category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/105/",
                "id": "105",
                "name": "Performing & Visual Arts",
                "name_localized": "Performing & Visual Arts",
                "short_name": "Arts",
                "short_name_localized": "Arts"
            }
        }
    ]
};