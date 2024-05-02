import { Collapse, Typography } from 'antd';
import './StyleAccordion.scss';
import { useState } from 'react';
import { getPhotoUrl } from './getPhotoUrl';
import { CaretRightOutlined } from '@ant-design/icons';

const Accordion = () => {
    const [activeKey, setActiveKey] = useState<string[]>(['1']); // Указываем явно тип как string[]
    const photoUrl: string = getPhotoUrl(activeKey)

    return (
        <>
            <h1 style={{ textAlign: 'center', paddingTop: 30 }}>Возможности Iphone с другими устройсвами</h1>
            <div className="accordion">
                <Collapse
                    accordion={true}
                    defaultActiveKey={['1']}
                    ghost={true}
                    expandIcon={({ isActive }) => {
                        return <CaretRightOutlined rotate={isActive ? 90 : 0} />
                    }}
                    onChange={e => {
                        if (typeof e === 'string') {
                            setActiveKey([e]);
                        } else {
                            setActiveKey(e);
                        }
                    }}

                >

                    <Collapse.Panel key={'1'} header='IPhone и Apple Watch' style={{ fontSize: 25 }}>
                        <Typography.Text>
                            Потеряли свой iPhone? Последние модели Apple Watch могут показать приблизительное расстояние и направление.14 Чтобы сделать групповую фотографию на iPhone, присоединитесь к группе и используйте Apple Watch как видоискатель, чтобы сделать снимок. А когда вы принимаете звонок на своих Apple Watch, просто коснитесь iPhone, чтобы продолжить разговор там.
                        </Typography.Text>
                    </Collapse.Panel>
                    <Collapse.Panel key={'2'} header='IPhone и Mac' style={{ fontSize: 25 }}>
                        <Typography.Text>
                            Вы можете отвечать на звонки или сообщения с iPhone прямо на Mac. Копируйте изображения, видео или текст с iPhone, а затем вставляйте их в другое приложение на ближайшем Mac. А с помощью iCloud вы можете получить доступ к своим любимым файлам как с iPhone, так и с Mac.
                        </Typography.Text>
                    </Collapse.Panel>
                    <Collapse.Panel key={'3'} header='IPhone и AirPods' style={{ fontSize: 25 }}>
                        <Typography.Text>
                            Настройте AirPods на iPhone одним касанием. Вам понравится функция Adaptive Audio, которая автоматически настраивает шумоподавление, чтобы обеспечить наилучшие впечатления от прослушивания в различных условиях и при общении в течение дня.
                        </Typography.Text>
                    </Collapse.Panel>
                </Collapse>
                <div className="accordion_img">
                    <img id='myImage' src={photoUrl} alt="no images" width={500} />
                </div>
            </div>
        </>
    );
};

export default Accordion;
