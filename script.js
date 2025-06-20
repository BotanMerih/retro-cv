document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const contentArea = document.getElementById('content-area');

    const sections = {
        about: {
            title: '--- HAKKIMDA ---',
            content: `Merhaba! Ben Mehmet Botan Merih. Video oyunlarına ve kodlamaya olan tutkumu birleştirerek harika deneyimler yaratıyorum. Özellikle Unity ve oyunlarda dengeleme üzerine çalışmaktan keyif alıyorum. Yeni teknolojiler öğrenmek ve kendimi geliştirmek en büyük motivasyonum.`
        },
        skills: {
            title: '--- YETENEKLER ---',
            content: `
                <ul>
                    <li>C++</li>
                    <li>C#</li>
                    <li>Unity</li>
                    <li>Unreal Engine</li>
                    <li>Godot</li>
                    <li>GameMaker</li>
                </ul>
            `
        },
        projects: {
            title: '--- PROJELERİM ---',
            content: `
                <div class="project">
                    <h3>Squaretrail: Lines of The Frame</h3>
                    <p>Squaretrail: Lines of The Frame, kare şeklindeki dünyaları döndürerek ilerlediğiniz, bulmaca ve macera dolu bir oyundur. Ana karakteriniz bir küptür ve her bölümde farklı engelleri aşmanız gerekmektedir.</p>
                </div>
            `
        },
        contact: {
            title: '--- İLETİŞİM ---',
            content: `
                <ul>
                    <li><a href="mailto:btnmrh@outlook.com">EMAIL</a></li>
                    <li><a href="https://github.com/BotanMerih" target="_blank">GITHUB</a></li>
                    <li><a href="https://www.linkedin.com/in/botan-merih-876042239/" target="_blank">LINKEDIN</a></li>
                </ul>
            `
        }
    };

    const menuItems = [
        { name: '> HAKKIMDA', action: 'about' },
        { name: '> YETENEKLER', action: 'skills' },
        { name: '> PROJELERİM', action: 'projects' },
        { name: '> İLETİŞİM', action: 'contact' }
    ];

    function renderMenu() {
        contentArea.innerHTML = '';
        const menuContainer = document.createElement('div');
        menuContainer.classList.add('menu');
        
        menuItems.forEach(item => {
            const button = document.createElement('button');
            button.textContent = item.name;
            button.classList.add('menu-button');
            button.dataset.action = item.action;
            menuContainer.appendChild(button);
        });
        contentArea.appendChild(menuContainer);
    }

    function renderContent(sectionKey) {
        const section = sections[sectionKey];
        contentArea.innerHTML = `
            <div class="content-box">
                <h2 class="content-title">${section.title}</h2>
                <div class="content-text">
                    ${section.content}
                </div>
                <button class="back-button">> GERİ</button>
            </div>
        `;
    }

    startBtn.addEventListener('click', renderMenu);

    contentArea.addEventListener('click', (e) => {
        if (e.target.classList.contains('menu-button')) {
            const action = e.target.dataset.action;
            renderContent(action);
        }
        if (e.target.classList.contains('back-button')) {
            renderMenu();
        }
    });
}); 