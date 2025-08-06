import type { Language } from './types.js';

// Define the structure of our translations
interface Translations {
	nav: {
		services: { id: string; en: string };
		portfolio: { id: string; en: string };
		about: { id: string; en: string };
		consultation: { id: string; en: string };
	};
	hero: {
		headline: { id: string; en: string };
		subheadline: { id: string; en: string };
		viewServices: { id: string; en: string };
		consultNow: { id: string; en: string };
		freeConsultation: { id: string; en: string };
	};
	services: {
		title: { id: string; en: string };
		webMobile: {
			title: { id: string; en: string };
			description: { id: string; en: string };
		};
		automation: {
			title: { id: string; en: string };
			description: { id: string; en: string };
		};
		integration: {
			title: { id: string; en: string };
			description: { id: string; en: string };
		};
		devops: {
			title: { id: string; en: string };
			description: { id: string; en: string };
		};
		database: {
			title: { id: string; en: string };
			description: { id: string; en: string };
		};
		consultation: {
			title: { id: string; en: string };
			description: { id: string; en: string };
		};
		ai: {
			title: { id: string; en: string };
			description: { id: string; en: string };
		};
	};
	howItWorks: {
		title: { id: string; en: string };
		steps: {
			step1: { id: string; en: string };
			step2: { id: string; en: string };
			step3: { id: string; en: string };
			step4: { id: string; en: string };
			step5: { id: string; en: string };
		};
	};
	portfolio: {
		title: { id: string; en: string };
	};
	testimonials: {
		title: { id: string; en: string };
	};
	about: {
		title: { id: string; en: string };
		bio: { id: string; en: string };
		vision: { id: string; en: string };
		mission: { id: string; en: string };
		approach: { id: string; en: string };
	};
	contact: {
		title: { id: string; en: string };
		name: { id: string; en: string };
		email: { id: string; en: string };
		message: { id: string; en: string };
		send: { id: string; en: string };
		whatsapp: { id: string; en: string };
	};
	footer: {
		terms: { id: string; en: string };
		privacy: { id: string; en: string };
		contact: { id: string; en: string };
		copyright: { id: string; en: string };
	};
}

// Translation dictionary
const translations: Translations = {
	nav: {
		services: { id: 'Layanan', en: 'Services' },
		portfolio: { id: 'Portofolio', en: 'Portfolio' },
		about: { id: 'Tentang', en: 'About' },
		consultation: { id: 'Konsultasi', en: 'Consultation' }
	},
	hero: {
		headline: {
			id: 'Solusi IT Modern untuk Bisnis Anda',
			en: 'Modern IT Solutions for Your Business'
		},
		subheadline: {
			id: 'Kami bantu transformasi digital Anda dengan layanan yang handal dan fleksibel.',
			en: 'We help you achieve digital transformation through reliable and flexible services.'
		},
		viewServices: { id: 'Lihat Layanan', en: 'View Services' },
		consultNow: { id: 'Konsultasi Sekarang', en: 'Consult Now' },
		freeConsultation: { id: 'Konsultasi Gratis', en: 'Free Consultation' }
	},
	services: {
		title: { id: 'Layanan Utama', en: 'Key Services' },
		webMobile: {
			title: { id: 'Web & Mobile Development', en: 'Web & Mobile Development' },
			description: {
				id: 'Website, aplikasi, dan landing page untuk kebutuhan digital Anda.',
				en: 'Websites, applications, and landing pages tailored to your digital needs.'
			}
		},
		automation: {
			title: { id: 'Automation & Workflow (n8n)', en: 'Automation & Workflow (n8n)' },
			description: {
				id: 'Otomatisasi alur kerja bisnis menggunakan n8n.',
				en: 'Business workflow automation with n8n.'
			}
		},
		integration: {
			title: { id: 'System Integration & API', en: 'System Integration & API' },
			description: {
				id: 'Integrasi API dan sistem pihak ketiga untuk efisiensi maksimal.',
				en: 'API and third-party integration for maximum efficiency.'
			}
		},
		devops: {
			title: { id: 'DevOps & Deployment', en: 'DevOps & Deployment' },
			description: {
				id: 'Penerapan CI/CD, Docker, dan pengelolaan server.',
				en: 'CI/CD implementation, Docker, and server management.'
			}
		},
		database: {
			title: { id: 'Database & Backend Systems', en: 'Database & Backend Systems' },
			description: {
				id: 'PostgreSQL, MySQL, MongoDB, Firebase – backend handal & scalable.',
				en: 'PostgreSQL, MySQL, MongoDB, Firebase – reliable & scalable backend.'
			}
		},
		consultation: {
			title: { id: 'IT Consultation & Tech Advisory', en: 'IT Consultation & Tech Advisory' },
			description: {
				id: 'Konsultasi teknologi untuk UMKM, startup, dan korporat.',
				en: 'Tech consulting for SMEs, startups, and enterprises.'
			}
		},
		ai: {
			title: { id: 'AI Integration & Tools', en: 'AI Integration & Tools' },
			description: {
				id: 'Integrasi AI (OpenAI, Vision, Automation) untuk efisiensi & inovasi.',
				en: 'AI integration (OpenAI, Vision, Automation) for efficiency & innovation.'
			}
		}
	},
	howItWorks: {
		title: { id: 'Cara Kerja Kami', en: 'How We Work' },
		steps: {
			step1: { id: 'Konsultasi Awal', en: 'Initial Consultation' },
			step2: { id: 'Penawaran & Rencana Proyek', en: 'Proposal & Planning' },
			step3: { id: 'Pengembangan & Kolaborasi', en: 'Development & Collaboration' },
			step4: { id: 'Uji Coba & Revisi', en: 'Testing & Revision' },
			step5: { id: 'Peluncuran & Pemeliharaan', en: 'Launch & Maintenance' }
		}
	},
	portfolio: {
		title: { id: 'Portofolio', en: 'Portfolio' }
	},
	testimonials: {
		title: { id: 'Testimoni Klien', en: 'Client Testimonials' }
	},
	about: {
		title: { id: 'Tentang Kami', en: 'About Us' },
		bio: {
			id: 'Kami adalah tim ahli IT yang berfokus pada solusi teknologi modern untuk bisnis Anda.',
			en: 'We are an IT expert team focused on modern technology solutions for your business.'
		},
		vision: {
			id: 'Menjadi mitra teknologi terpercaya yang membantu bisnis berkembang melalui inovasi digital.',
			en: 'To become a trusted technology partner that helps businesses grow through digital innovation.'
		},
		mission: {
			id: 'Menyediakan solusi IT yang handal, efisien, dan sesuai dengan kebutuhan unik setiap klien.',
			en: 'To provide reliable, efficient IT solutions tailored to each client\'s unique needs.'
		},
		approach: {
			id: 'Remote-first, tech-forward, client-centric approach',
			en: 'Remote-first, tech-forward, client-centric approach'
		}
	},
	contact: {
		title: { id: 'Konsultasi', en: 'Consultation' },
		name: { id: 'Nama', en: 'Name' },
		email: { id: 'Email', en: 'Email' },
		message: { id: 'Pesan', en: 'Message' },
		send: { id: 'Kirim Pesan', en: 'Send Message' },
		whatsapp: { id: 'Hubungi via WhatsApp', en: 'Contact via WhatsApp' }
	},
	footer: {
		terms: { id: 'Syarat', en: 'Terms' },
		privacy: { id: 'Privasi', en: 'Privacy' },
		contact: { id: 'Kontak', en: 'Contact' },
		copyright: {
			id: '© 2023 Nama Perusahaan. Hak Cipta Dilindungi.',
			en: '© 2023 Company Name. All Rights Reserved.'
		}
	}
};

// Helper function to get translated text
export function t(key: string, lang: Language): string {
	const keys = key.split('.');
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let result: any = translations;

	for (const k of keys) {
		if (result && typeof result === 'object' && k in result) {
			result = result[k];
		} else {
			return key; // Return the key if translation not found
		}
	}

	return result[lang] || result.id || key;
}