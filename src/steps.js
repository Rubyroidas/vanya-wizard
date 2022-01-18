export const steps = {
    begin: {
        body: 'Какой путь вам ближе?',
        decisions: [
            {
                text: 'Через работу',
                gotoStep: 'work-1'
            },
            {
                text: 'Через Express Entry',
                gotoStep: 'express-entry-1'
            },
            {
                text: 'Через учёбу',
                gotoStep: 'study-1'
            },
            {
                text: 'Через PNP',
                gotoStep: 'pnp-1'
            },
        ]
    },
    'work-1': {
        body: 'У вас есть опыт работы по какой-либо специальности хотя бы 1 год?',
        decisions: [
            {
                text: 'да',
                gotoStep: 'work-2'
            },
            {
                text: 'нет',
                gotoStep: 'fail'
            },
        ]
    },
    'work-2': {
        body: 'У вас есть резюме на английском, составленное по канадским стандартам?',
        decisions: [
            {
                text: 'да',
                gotoStep: 'work-3'
            },
            {
                text: 'нет, а как его составить?',
                gotoStep: 'work-2-resume-howto'
            },
            {
                text: 'нет',
                gotoStep: 'fail'
            },
        ]
    },
    'work-2-resume-howto': {
        body: 'Чтобы составить резюме, пиши по адресу rezume_canada@mail.ru. Так уж и быть, помогу.',
    },
    'work-3': {
        body: 'TODO: Придумать дальше',
        decisions: [
            {
                text: 'да',
                gotoStep: 'work-4'
            },
            {
                text: 'нет',
                gotoStep: 'fail'
            },
        ]
    },
    'fail': {
        body: 'Сорян, бро, ничего не могу поделать. Это провал.',
    }
};
