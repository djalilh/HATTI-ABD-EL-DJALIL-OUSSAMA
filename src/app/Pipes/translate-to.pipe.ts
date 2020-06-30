import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateTo'
})
export class TranslateToPipe implements PipeTransform {

  transform(value: string, lang: string): string {
    if(this.values[value] != null && this.values[value] != ''){
      return this.values[value][lang];
    }else{
      return value;
    }
  }


  values: any = {
    'Home' : {
      'en' : 'Home',
      'fr' : 'Accueil',
      'ar' : 'الرئيسية'
    },
    'Work' : {
      'en' : 'Work',
      'fr' : 'Métier',
      'ar' : 'المهمة'
    },
    'Skills' : {
      'en' : 'Skills',
      'fr' : 'Compétences',
      'ar' : 'مهارات'
    },
    'Services' : {
      'en' : 'Services',
      'fr' : 'Services',
      'ar' : 'خدمات'
    },
    'Contacts' : {
      'en' : 'Contacts',
      'fr' : 'Contacts',
      'ar' : 'الاتصال'
    },
    'Languages' : {
      'en' : 'Languages',
      'fr' : 'Langues',
      'ar' : 'اللغات'
    },
    'English' : {
      'en' : 'English',
      'fr' : 'Anglais',
      'ar' : 'الإنجليزية'
    },
    'French' : {
      'en' : 'French',
      'fr' : 'Français',
      'ar' : 'الفرنسية'
    },
    'Arabic' : {
      'en' : 'Arabic',
      'fr' : 'Arabe',
      'ar' : 'العربية'
    },
    'Greetings' : {
      'en' : 'Hi There, I Am Djalil',
      'fr' : 'Salut, je suis Djalil',
      'ar' : 'مرحبًا ، أنا عبد الجليل'
    },
    'Expertise' : {
      'en' : 'Senior Developer',
      'fr' : 'Developpeur sénior',
      'ar' : 'مطور برامج خبير'
    },
    'Work_header' : {
      'en' : 'I\'m an advanced information systems engineer and a creative web/desktop developer based in algeria.',
      'fr' : 'Je suis un ingenieur système d\'information avancé et un développeur web / desktop créatif basé en algérie.',
      'ar' : 'أنا مهندس نظم معلومات المتقدمة و مطور ويب / مكتبي مبتكر مقره في الجزائر'
    },
    'Work_body_1' : {
      'en' : 'I enjoy finding and implementing solutions and systems that solve management problems and difficulties that occured in all types of business.',
      'fr' : 'j\'aime trouver et mettre en œuvre des solutions et des systèmes qui résolvent les problèmes et les difficultés de gestion survenues dans tout les type d\'entreprise.',
      'ar' : 'أحب أن أجد و ابرمج الحلول والأنظمة التي تحل المشكلات والصعوبات الإدارية التي تواجهها جميع أنواع الأعمال'
    },
    'Work_body_2' : {
      'en' : 'I have been developing systems and web sites since 2015, I developed systems for private companies several times using different technologies, Please take a look at my CV.',
      'fr' : 'Je développe des systèmes et des sites web depuis 2015, J\'ai développé plusieurs fois des systèmes pour des entreprises privées en utilisant différentes technologies, Veuillez consulter mon CV.',
      'ar' : 'لقد قمت بتطوير أنظمة ومواقع ويب منذ عام 2015 ، وقمت بتطوير أنظمة للشركات الخاصة عدة مرات باستخدام تقنيات مختلفة ، يرجى الاطلاع على سيرتي الذاتية'
    },
    'Web Backend Development' : {
      'en' : 'Web Backend Development',
      'fr' : 'Développement Web Backend',
      'ar' : 'تطوير الواجهة الخلفية للويب'
    },
    'Web Frontend Development' : {
      'en' : 'Web Frontend Development',
      'fr' : 'Développement Web Frontend',
      'ar' : 'تطوير الواجهة الأمامية للويب'
    },
    'Desktop Application Development' : {
      'en' : 'Desktop Application Development',
      'fr' : 'Développement d\'applications de bureau',
      'ar' : 'تطوير تطبيقات سطح المكتب'
    },
    'Android application development' : {
      'en' : 'Android application development',
      'fr' : 'Développement d\'applications android',
      'ar' : 'تطوير تطبيقات الاندرويد'
    },
    'Web Development Skills' : {
      'en' : 'Web Development Skills',
      'fr' : 'Compétences en développement Web',
      'ar' : 'مهارات تطوير الويب'
    },
    'Desktop Development Skills' : {
      'en' : 'Desktop Development Skills',
      'fr' : 'Compétences en développement de Desktop',
      'ar' : 'مهارات تطوير سطح المكتب'
    },
    'Database Development Skills' : {
      'en' : 'Database Development Skills',
      'fr' : 'Compétences en développement de bases de données',
      'ar' : 'مهارات تطوير قواعد البيانات'
    },
    'LetsTalk_body' : {
      'en' : 'If you have any project or idea you want to realise or you have some difficulty in managing your company and you need a system to simplify your work, I\'m your guy, let\'s talk',
      'fr' : 'Si vous avez un projet ou une idée que vous souhaitez réaliser ou si vous avez des difficultés à gérer votre entreprise et que vous avez besoin d\'un système pour simplifier votre travail, je suis votre gars, parlons-en',
      'ar' : 'إذا كان لديك أي مشروع أو فكرة تريد تحقيقها أو لديك بعض الصعوبات في إدارة شركتك وتحتاج إلى نظام لتبسيط عملك  ، فلنتحدث'
    },
    'LetsTalk_header_2' : {
      'en' : 'Let’s Talk',
      'fr' : 'Contactez Moi',
      'ar' : 'اتصل بي'
    },
    'LetsTalk_header_1' : {
      'en' : 'Do you have any Project?',
      'fr' : 'Avez-vous un projet?',
      'ar' : 'هل لديك أي مشروع؟'
    },
    'Download CV' : {
      'en' : 'Download CV',
      'fr' : 'Téléchargez CV',
      'ar' : 'تحميل السيرة الذاتية'
    },
    'View Skills' : {
      'en' : 'View Skills',
      'fr' : 'Voir les compétences',
      'ar' : 'عرض المهارات'
    },
    'View Works' : {
      'en' : 'View Works',
      'fr' : 'Voir le Métier',
      'ar' : 'عرض المهمة'
    }
  }


}
