import {
    Body,
    Column,
    Container,
    Heading,
    Html,
    Row,
    Section,
    Text,
} from '@react-email/components';

interface StaffNotificationEmailProps {
    lastName: string;
    firstName: string;
    email: string;
    phone: string;
    dateRange: [Date, Date];
}

export default function StaffNotificationEmail({
    lastName = 'Dupont',
    firstName = 'Jean',
    email = 'jean.dupont@email.com',
    phone = '+33 6 12 34 56 78',
    dateRange = [new Date('2025-07-01'), new Date('2025-07-07')],
}: Partial<StaffNotificationEmailProps> = {}) {
    const nights = Math.ceil(
        (dateRange[1].getTime() - dateRange[0].getTime()) / (1000 * 60 * 60 * 24),
    );

    return (
        <Html>
            <Body
                style={{
                    fontFamily: 'Arial, sans-serif',
                    margin: 0,
                    padding: 0,
                    backgroundColor: '#f5f5f5',
                }}>
                <Container
                    style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff' }}>
                    {/* Header */}
                    <Section
                        style={{
                            background: 'linear-gradient(to right, #0d9488, #0f766e)',
                            padding: '24px',
                            borderRadius: '8px 8px 0 0',
                        }}>
                        <Row>
                            <Column>
                                <Heading
                                    style={{
                                        color: '#ffffff',
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                        margin: '0 0 8px 0',
                                    }}>
                                    🔔 Nouvelle demande de réservation
                                </Heading>
                                <Text
                                    style={{
                                        color: '#a7f3d0',
                                        fontSize: '14px',
                                        margin: 0,
                                    }}>
                                    📍 La plage de Farinole • 🕐 Reçue le{' '}
                                    {new Date().toLocaleDateString('fr-FR')}
                                </Text>
                            </Column>
                        </Row>
                    </Section>

                    {/* Priority Alert */}
                    <Section style={{ padding: '24px 24px 0 24px' }}>
                        <Row>
                            <Column
                                style={{
                                    borderLeft: '4px solid #f59e0b',
                                    backgroundColor: '#fef3c7',
                                    padding: '16px',
                                    borderRadius: '0 8px 8px 0',
                                }}>
                                <Text
                                    style={{
                                        color: '#92400e',
                                        fontWeight: 'bold',
                                        margin: 0,
                                    }}>
                                    ⚡ Action requise : Répondre dans les 24h
                                </Text>
                            </Column>
                        </Row>
                    </Section>

                    {/* Client Information */}
                    <Section style={{ padding: '16px 24px' }}>
                        <Row>
                            <Column
                                style={{
                                    border: '1px solid #5eead4',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                }}>
                                <Section
                                    style={{ backgroundColor: '#f0fdfa', padding: '12px 16px' }}>
                                    <Heading
                                        style={{
                                            color: '#115e59',
                                            fontSize: '16px',
                                            margin: 0,
                                        }}>
                                        👥 Informations du client
                                    </Heading>
                                </Section>

                                <Section style={{ padding: '16px' }}>
                                    {/* Name */}
                                    <Row style={{ marginBottom: '12px' }}>
                                        <Column
                                            style={{
                                                backgroundColor: '#f9fafb',
                                                padding: '12px',
                                                borderRadius: '8px',
                                            }}>
                                            <Text
                                                style={{
                                                    fontWeight: 'bold',
                                                    color: '#1f2937',
                                                    margin: '0 0 4px 0',
                                                }}>
                                                👤 {firstName} {lastName}
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: '12px',
                                                    color: '#6b7280',
                                                    margin: 0,
                                                }}>
                                                Nom complet
                                            </Text>
                                        </Column>
                                    </Row>

                                    {/* Email */}
                                    <Row style={{ marginBottom: '12px' }}>
                                        <Column
                                            style={{
                                                backgroundColor: '#f9fafb',
                                                padding: '12px',
                                                borderRadius: '8px',
                                            }}>
                                            <Text
                                                style={{
                                                    fontWeight: 'bold',
                                                    color: '#0d9488',
                                                    margin: '0 0 4px 0',
                                                }}>
                                                ✉️ {email}
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: '12px',
                                                    color: '#6b7280',
                                                    margin: 0,
                                                }}>
                                                Adresse e-mail
                                            </Text>
                                        </Column>
                                    </Row>

                                    {/* Phone */}
                                    <Row>
                                        <Column
                                            style={{
                                                backgroundColor: '#f9fafb',
                                                padding: '12px',
                                                borderRadius: '8px',
                                            }}>
                                            <Text
                                                style={{
                                                    fontWeight: 'bold',
                                                    color: '#1f2937',
                                                    margin: '0 0 4px 0',
                                                }}>
                                                📞 {phone}
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: '12px',
                                                    color: '#6b7280',
                                                    margin: 0,
                                                }}>
                                                Numéro de téléphone
                                            </Text>
                                        </Column>
                                    </Row>
                                </Section>
                            </Column>
                        </Row>
                    </Section>

                    {/* Residence Information */}
                    <Section style={{ padding: '0 24px 16px 24px' }}>
                        <Row>
                            <Column
                                style={{
                                    border: '1px solid #5eead4',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                }}>
                                <Section
                                    style={{ backgroundColor: '#f0fdfa', padding: '12px 16px' }}>
                                    <Heading
                                        style={{
                                            color: '#115e59',
                                            fontSize: '16px',
                                            margin: 0,
                                        }}>
                                        🏠 Résidence demandée
                                    </Heading>
                                </Section>

                                <Section style={{ padding: '16px' }}>
                                    <Row>
                                        <Column
                                            style={{
                                                backgroundColor: '#f0fdfa',
                                                border: '1px solid #5eead4',
                                                padding: '16px',
                                                borderRadius: '8px',
                                            }}>
                                            <Row>
                                                <Column style={{ width: '70%' }}>
                                                    <Text
                                                        style={{
                                                            fontSize: '20px',
                                                            fontWeight: 'bold',
                                                            color: '#0f766e',
                                                            margin: '0 0 4px 0',
                                                        }}>
                                                        Numéro 1
                                                    </Text>
                                                    <Text
                                                        style={{
                                                            fontSize: '14px',
                                                            color: '#0d9488',
                                                            margin: 0,
                                                        }}>
                                                        41m² • 2 chambres • 4 personnes
                                                    </Text>
                                                </Column>
                                                <Column
                                                    style={{ width: '30%', textAlign: 'right' }}>
                                                    <Text
                                                        style={{
                                                            backgroundColor: '#0d9488',
                                                            color: '#ffffff',
                                                            padding: '4px 8px',
                                                            borderRadius: '4px',
                                                            fontSize: '12px',
                                                            margin: 0,
                                                            display: 'inline-block',
                                                        }}>
                                                        Disponible
                                                    </Text>
                                                </Column>
                                            </Row>
                                        </Column>
                                    </Row>
                                </Section>
                            </Column>
                        </Row>
                    </Section>

                    {/* Date Range */}
                    <Section style={{ padding: '0 24px 16px 24px' }}>
                        <Row>
                            <Column
                                style={{
                                    border: '1px solid #5eead4',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                }}>
                                <Section
                                    style={{ backgroundColor: '#f0fdfa', padding: '12px 16px' }}>
                                    <Heading
                                        style={{
                                            color: '#115e59',
                                            fontSize: '16px',
                                            margin: 0,
                                        }}>
                                        📅 Période souhaitée
                                    </Heading>
                                </Section>

                                <Section style={{ padding: '16px' }}>
                                    {/* Date Range */}
                                    <Row style={{ marginBottom: '12px' }}>
                                        <Column
                                            style={{
                                                backgroundColor: '#f9fafb',
                                                padding: '12px',
                                                borderRadius: '8px',
                                            }}>
                                            <Text
                                                style={{
                                                    fontWeight: 'bold',
                                                    color: '#1f2937',
                                                    margin: '0 0 4px 0',
                                                }}>
                                                📅{' '}
                                                {dateRange[0].toLocaleDateString('fr-FR', {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric',
                                                })}{' '}
                                                →{' '}
                                                {dateRange[1].toLocaleDateString('fr-FR', {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric',
                                                })}
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: '14px',
                                                    color: '#6b7280',
                                                    margin: 0,
                                                }}>
                                                {nights} nuits
                                            </Text>
                                        </Column>
                                    </Row>

                                    {/* Pricing */}
                                    <Row>
                                        <Column
                                            style={{
                                                backgroundColor: '#f0fdf4',
                                                border: '1px solid #86efac',
                                                padding: '12px',
                                                borderRadius: '8px',
                                            }}>
                                            <Row>
                                                <Column style={{ width: '70%' }}>
                                                    <Text
                                                        style={{
                                                            fontWeight: 'bold',
                                                            color: '#166534',
                                                            margin: 0,
                                                        }}>
                                                        Tarif estimé
                                                    </Text>
                                                    <Text
                                                        style={{
                                                            fontSize: '12px',
                                                            color: '#16a34a',
                                                            margin: '4px 0 0 0',
                                                        }}>
                                                        Particulier • {nights} nuits × 43€
                                                    </Text>
                                                </Column>
                                                <Column
                                                    style={{ width: '30%', textAlign: 'right' }}>
                                                    <Text
                                                        style={{
                                                            fontSize: '18px',
                                                            fontWeight: 'bold',
                                                            color: '#15803d',
                                                            margin: 0,
                                                        }}>
                                                        {nights * 43}€
                                                    </Text>
                                                </Column>
                                            </Row>
                                        </Column>
                                    </Row>
                                </Section>
                            </Column>
                        </Row>
                    </Section>

                    {/* Actions */}
                    <Section style={{ padding: '0 24px 24px 24px' }}>
                        <Row>
                            <Column
                                style={{
                                    border: '1px solid #fed7aa',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                }}>
                                <Section
                                    style={{ backgroundColor: '#fff7ed', padding: '12px 16px' }}>
                                    <Heading
                                        style={{
                                            color: '#9a3412',
                                            fontSize: '16px',
                                            margin: 0,
                                        }}>
                                        Actions à effectuer
                                    </Heading>
                                </Section>

                                <Section style={{ padding: '16px' }}>
                                    <Text
                                        style={{
                                            color: '#374151',
                                            fontSize: '14px',
                                            margin: '0 0 8px 0',
                                        }}>
                                        🔸 Vérifier la disponibilité dans le planning
                                    </Text>
                                    <Text
                                        style={{
                                            color: '#374151',
                                            fontSize: '14px',
                                            margin: '0 0 8px 0',
                                        }}>
                                        🔸 Envoyer la confirmation ou le refus au client
                                    </Text>
                                    <Text style={{ color: '#374151', fontSize: '14px', margin: 0 }}>
                                        🔸 Mettre à jour le système de réservation
                                    </Text>
                                </Section>
                            </Column>
                        </Row>
                    </Section>

                    {/* Footer */}
                    <Section
                        style={{
                            backgroundColor: '#0f766e',
                            padding: '16px',
                            textAlign: 'center',
                            borderRadius: '0 0 8px 8px',
                        }}>
                        <Text
                            style={{
                                color: '#ffffff',
                                fontSize: '14px',
                                margin: '0 0 4px 0',
                            }}>
                            Système de réservation La plage de Farinole
                        </Text>
                        <Text
                            style={{
                                color: '#5eead4',
                                fontSize: '12px',
                                margin: 0,
                            }}>
                            ID: RES-{Date.now().toString().slice(-6)}
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}
