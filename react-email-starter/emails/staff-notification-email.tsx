import { Bell, CalendarDays, Clock, Home, Mail, MapPin, Phone, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../src/components/ui/card';
import { Badge } from '../../src/components/ui/badge';

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
        <div
            style={{
                maxWidth: '672px',
                margin: '0 auto',
                backgroundColor: '#ffffff',
                fontFamily: 'Inter, sans-serif',
            }}>
            {/* Header with coastal theme */}
            <div
                style={{
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                    background: 'linear-gradient(to right, #0d9488, #0f766e)',
                    padding: '24px',
                    color: '#ffffff',
                }}>
                <div
                    style={{
                        marginBottom: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                    }}>
                    <Bell style={{ height: '24px', width: '24px' }} />
                    <h1
                        style={{
                            fontSize: '20px',
                            fontWeight: 'bold',
                            margin: 0,
                        }}>
                        Nouvelle demande de réservation
                    </h1>
                </div>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: '#99f6e4',
                    }}>
                    <MapPin style={{ height: '16px', width: '16px' }} />
                    <span>La plage de Farinole</span>
                    <span style={{ margin: '0 8px' }}>•</span>
                    <Clock style={{ height: '16px', width: '16px' }} />
                    <span>Reçue le {new Date().toLocaleDateString('fr-FR')}</span>
                </div>
            </div>

            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    flexDirection: 'column',
                    gap: '16px',
                    padding: '24px',
                    fontSize: '14px',
                }}>
                {/* Priority alert */}
                <div
                    style={{
                        borderTopRightRadius: '8px',
                        borderBottomRightRadius: '8px',
                        borderLeft: '4px solid #f59e0b',
                        backgroundColor: '#fffbeb',
                        padding: '16px',
                    }}>
                    <p
                        style={{
                            fontWeight: '500',
                            color: '#92400e',
                            margin: 0,
                        }}>
                        ⚡ Action requise : Répondre dans les 24h
                    </p>
                </div>

                {/* Client Information */}
                <Card
                    style={{
                        borderColor: '#5eead4',
                        boxShadow:
                            '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                    }}>
                    <CardHeader style={{ backgroundColor: '#f0fdfa' }}>
                        <CardTitle
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontSize: '16px',
                                color: '#115e59',
                            }}>
                            <Users style={{ height: '16px', width: '16px' }} />
                            Informations du client
                        </CardTitle>
                    </CardHeader>
                    <CardContent
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                            padding: '16px',
                        }}>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                borderRadius: '8px',
                                backgroundColor: '#f9fafb',
                                padding: '12px',
                            }}>
                            <div
                                style={{
                                    display: 'flex',
                                    height: '32px',
                                    width: '32px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%',
                                    backgroundColor: '#ccfbf1',
                                }}>
                                <Users
                                    style={{ height: '16px', width: '16px', color: '#0d9488' }}
                                />
                            </div>
                            <div>
                                <p
                                    style={{
                                        fontWeight: '600',
                                        color: '#1f2937',
                                        margin: 0,
                                    }}>
                                    {firstName} {lastName}
                                </p>
                                <p
                                    style={{
                                        fontSize: '12px',
                                        color: '#4b5563',
                                        margin: 0,
                                    }}>
                                    Nom complet
                                </p>
                            </div>
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                borderRadius: '8px',
                                backgroundColor: '#f9fafb',
                                padding: '12px',
                            }}>
                            <div
                                style={{
                                    display: 'flex',
                                    height: '32px',
                                    width: '32px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%',
                                    backgroundColor: '#ccfbf1',
                                }}>
                                <Mail style={{ height: '16px', width: '16px', color: '#0d9488' }} />
                            </div>
                            <div>
                                <p
                                    style={{
                                        fontWeight: '500',
                                        color: '#0f766e',
                                        margin: 0,
                                    }}>
                                    {email}
                                </p>
                                <p
                                    style={{
                                        fontSize: '12px',
                                        color: '#4b5563',
                                        margin: 0,
                                    }}>
                                    Adresse e-mail
                                </p>
                            </div>
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                borderRadius: '8px',
                                backgroundColor: '#f9fafb',
                                padding: '12px',
                            }}>
                            <div
                                style={{
                                    display: 'flex',
                                    height: '32px',
                                    width: '32px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%',
                                    backgroundColor: '#ccfbf1',
                                }}>
                                <Phone
                                    style={{ height: '16px', width: '16px', color: '#0d9488' }}
                                />
                            </div>
                            <div>
                                <p
                                    style={{
                                        fontWeight: '500',
                                        margin: 0,
                                    }}>
                                    {phone}
                                </p>
                                <p
                                    style={{
                                        fontSize: '12px',
                                        color: '#4b5563',
                                        margin: 0,
                                    }}>
                                    Numéro de téléphone
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Residence Information */}
                <Card
                    style={{
                        borderColor: '#5eead4',
                        boxShadow:
                            '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                    }}>
                    <CardHeader style={{ backgroundColor: '#f0fdfa' }}>
                        <CardTitle
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontSize: '16px',
                                color: '#115e59',
                            }}>
                            <Home style={{ height: '16px', width: '16px' }} />
                            Résidence demandée
                        </CardTitle>
                    </CardHeader>
                    <CardContent style={{ padding: '16px' }}>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                borderRadius: '8px',
                                border: '1px solid #5eead4',
                                backgroundColor: '#f0fdfa',
                                padding: '16px',
                            }}>
                            <div>
                                <p
                                    style={{
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                        color: '#0f766e',
                                        margin: 0,
                                    }}>
                                    Numéro 1
                                </p>
                                <p
                                    style={{
                                        fontSize: '14px',
                                        color: '#0d9488',
                                        margin: 0,
                                    }}>
                                    41m² • 2 chambres • 4 personnes
                                </p>
                            </div>
                            <Badge
                                style={{
                                    backgroundColor: '#0d9488',
                                    color: '#ffffff',
                                }}>
                                Disponible
                            </Badge>
                        </div>
                    </CardContent>
                </Card>

                {/* Date Range */}
                <Card
                    style={{
                        borderColor: '#5eead4',
                        boxShadow:
                            '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                    }}>
                    <CardHeader style={{ backgroundColor: '#f0fdfa' }}>
                        <CardTitle
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontSize: '16px',
                                color: '#115e59',
                            }}>
                            <CalendarDays style={{ height: '16px', width: '16px' }} />
                            Période souhaitée
                        </CardTitle>
                    </CardHeader>
                    <CardContent style={{ padding: '16px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    borderRadius: '8px',
                                    backgroundColor: '#f9fafb',
                                    padding: '12px',
                                }}>
                                <CalendarDays
                                    style={{ height: '20px', width: '20px', color: '#0d9488' }}
                                />
                                <div>
                                    <p
                                        style={{
                                            fontWeight: '600',
                                            color: '#1f2937',
                                            margin: 0,
                                        }}>
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
                                    </p>
                                    <p
                                        style={{
                                            fontSize: '14px',
                                            color: '#4b5563',
                                            margin: 0,
                                        }}>
                                        {nights} nuits
                                    </p>
                                </div>
                            </div>

                            {/* Pricing info */}
                            <div
                                style={{
                                    borderRadius: '8px',
                                    border: '1px solid #bbf7d0',
                                    backgroundColor: '#f0fdf4',
                                    padding: '12px',
                                }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}>
                                    <span
                                        style={{
                                            fontWeight: '500',
                                            color: '#166534',
                                        }}>
                                        Tarif estimé
                                    </span>
                                    <span
                                        style={{
                                            fontSize: '18px',
                                            fontWeight: 'bold',
                                            color: '#15803d',
                                        }}>
                                        {nights * 43}€
                                    </span>
                                </div>
                                <p
                                    style={{
                                        marginTop: '4px',
                                        fontSize: '12px',
                                        color: '#16a34a',
                                        margin: '4px 0 0 0',
                                    }}>
                                    Particulier • {nights} nuits × 43€
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Action needed */}
                <Card
                    style={{
                        borderColor: '#fed7aa',
                        boxShadow:
                            '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                    }}>
                    <CardHeader style={{ backgroundColor: '#fff7ed' }}>
                        <CardTitle
                            style={{
                                fontSize: '16px',
                                color: '#9a3412',
                            }}>
                            Actions à effectuer
                        </CardTitle>
                    </CardHeader>
                    <CardContent style={{ padding: '16px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontSize: '14px',
                                }}>
                                <div
                                    style={{
                                        height: '8px',
                                        width: '8px',
                                        borderRadius: '50%',
                                        backgroundColor: '#f97316',
                                    }}></div>
                                <span>Vérifier la disponibilité dans le planning</span>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontSize: '14px',
                                }}>
                                <div
                                    style={{
                                        height: '8px',
                                        width: '8px',
                                        borderRadius: '50%',
                                        backgroundColor: '#f97316',
                                    }}></div>
                                <span>Envoyer la confirmation ou le refus au client</span>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontSize: '14px',
                                }}>
                                <div
                                    style={{
                                        height: '8px',
                                        width: '8px',
                                        borderRadius: '50%',
                                        backgroundColor: '#f97316',
                                    }}></div>
                                <span>Mettre à jour le système de réservation</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Footer */}
            <div
                style={{
                    borderBottomLeftRadius: '8px',
                    borderBottomRightRadius: '8px',
                    backgroundColor: '#0f766e',
                    padding: '16px',
                    textAlign: 'center',
                    fontSize: '14px',
                    color: '#ffffff',
                }}>
                <p style={{ margin: 0 }}>Système de réservation La plage de Farinole</p>
                <p
                    style={{
                        marginTop: '4px',
                        fontSize: '12px',
                        color: '#5eead4',
                        margin: '4px 0 0 0',
                    }}>
                    ID: RES-{Date.now().toString().slice(-6)}
                </p>
            </div>
        </div>
    );
}
